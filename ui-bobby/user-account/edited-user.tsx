import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button } from '@/components/ui/button';
import { useUpdateUser } from '../api/edited-user';
import type { UserData } from '../types/user';
import { useModalConfirmStore } from '@/hooks/use-modal-confirm-store';
import { Input } from '@/components/ui/forms/input';
import ModalForm from '@/components/ui/modals/modal-form';
import { useModal } from '@/hooks/use-modal';
import { useModalStore } from '@/hooks/use-modal-store';
import { UserSchema, type UserSchemaType } from '../schemas/user-schema';
import { ButtonAction } from '@/components/ui/button-action';

export default function EditedUser({ user }: { user: UserData }) {
  const mutation = useUpdateUser({});
  const modalUpdate = useModal();
  const modalSuccess = useModalStore("modalSuccess");
  const modalFailed = useModalStore("modalFailed");
  const modalSubmit = useModalConfirmStore("modalSubmit");

  const { reset, register, handleSubmit, formState: { errors } } = useForm({
    resolver: zodResolver(UserSchema),
    mode: "onSubmit",
    defaultValues: {
      email: user.email,
      name: user.name,
      rolename: user.role,
      department: user.department,
      position: user.position
    }
  });

  const handleCancel = () => {
    reset();
    modalUpdate.hideModal();
  };

  const handleUpdate = (data: UserSchemaType) => {
    if (!user.id) {
      modalFailed.openModal("User ID tidak ditemukan, tidak bisa update.");
      return;
    }
    modalSubmit.handleConfirm({
      heading : "Confirm Update",
      message : "The changes you make will overwrite the current user data. Are you sure you want to continue?",
      onCancel: modalSubmit.hideModal,
      onSubmit: async () => {
        try {
          await mutation.mutateAsync({ id: user.id as string, data });
          reset();
          modalUpdate.hideModal();
          modalSubmit.hideModal();
          modalSuccess.openModal("User data has been successfully updated.");
        } catch (error: any) {
          modalSubmit.hideModal();
          modalFailed.openModal(error.message);
        }
      },
    });
  };

  return (
    <>
      <ButtonAction
        actions={[ 
          { type: "edit", onClick: modalUpdate.openModal },
        ]}
      />
      <ModalForm heading="Edit User" visible={modalUpdate.visible} onClose={modalUpdate.hideModal} hideBtnClose>
        <form onSubmit={handleSubmit(handleUpdate)} className="flex flex-col items-center gap-6">
          <div className="flex flex-col gap-3 w-full">
            <Input type="email" label="Email" placeholder="example@gmail.com" error={errors.email?.message} {...register("email")} />
            <Input label="Name" placeholder="Input name" error={errors.name?.message} {...register("name")} />
            <Input label="Role Name" placeholder="Input role" error={errors.rolename?.message} {...register("rolename")} />
            <Input label="Department" placeholder="Input department" error={errors.department?.message} {...register("department")} />
            <Input label="Position" placeholder="Input position" error={errors.position?.message} {...register("position")} />
          </div>
          <div className="grid grid-cols-2 gap-2 w-full">
            <Button type="button" text="Cancel" variant="dangers" disabled={mutation.isPending} onClick={handleCancel} />
            <Button type="submit" text="Submit" variant="gradien" load={mutation.isPending} />
          </div>
        </form>
      </ModalForm>
    </>
  );
}
