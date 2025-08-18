import { Plus } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import { Button } from '@/components/ui/button';
import { useCreateUser } from '../api/create-user';
import { useModalConfirmStore } from '@/hooks/use-modal-confirm-store';
import { Input } from '@/components/ui/forms/input';
import ModalForm from '@/components/ui/modals/modal-form';
import { useModal } from '@/hooks/use-modal';
import { useModalStore } from '@/hooks/use-modal-store';
import { UserSchema, type UserSchemaType } from '../schemas/user-schema';
import { Label } from '@/components/ui/forms/label';
import { SelectWithEmptyState } from '@/domain/master-data/auditor/components/select-empty';
import { users } from '../types/user-data';
import { useState } from 'react';
import FileUploadInput from '@/components/ui/file-upload';

export default function CreateUser() {
  const mutation = useCreateUser({});

  const modalCreate = useModal();
  const modalSuccess = useModalStore("modalSuccess");
  const modalFailed = useModalStore("modalFailed");
  const modalSubmit = useModalConfirmStore("modalSubmit");

  const [selectedName, setSelectedName] = useState("");
  const [selectedRole, setSelectedRole] = useState("");

  // Extract unique names and roles from users and map to Option[]
  const auditorNames = Array.from(
    new Map(
      users
        .filter(u => u.name)
        .map(u => [u.name!, { id: u.id ?? u.name!, name: u.name! }])
    ).values()
  );
  const roles = Array.from(
    new Map(
      users
        .filter(u => u.role)
        .map(u => [u.role!, { id: u.role! || "role", name: u.role! }])
    ).values()
  );
  

  const { reset, register, handleSubmit, setValue, formState: { errors, isValid } } = useForm({
    resolver: zodResolver(UserSchema),
    mode: "onSubmit",
  });

  const handleCancel = () => {
    reset();
    modalCreate.hideModal();
  }

  // Update email and department when auditor name changes
  const handleAuditorChange = (name: string) => {
    setSelectedName(name);
    const user = users.find(u => u.name === name);
    if (user) {
      setValue("email", user.email ?? "");
      setValue("department", user.department ?? "");
    } else {
      setValue("email", "");
      setValue("department", "");
    }
  };

  // Update role in form state when role changes
  const handleRoleChange = (role: string) => {
    setSelectedRole(role);
    setValue("rolename", role);
  };

  const handleCreate = (data: UserSchemaType) => {
    modalSubmit.handleConfirm({
      heading : "Confirm New User",
      message : "Are you sure you want to save this user data?",
      onCancel: modalSubmit.hideModal,
      onSubmit: async () => {
        try {
          await mutation.mutateAsync({ data });

          reset();
          modalCreate.hideModal();
          modalSubmit.hideModal();
          modalSuccess.openModal("User data has been successfully saved.");

        } catch (error: any) {
          modalSubmit.hideModal();
          modalFailed.openModal(error.message);
        }
      },
    });
  }
  
  return (
    <>
      <Button 
        icon={<Plus />} 
        text={"Create New User"} 
        onClick={() => modalCreate.openModal()} 
        variant="gradien" 
        className="w-fit" 
      />
      <ModalForm heading="Create User" visible={modalCreate.visible} onClose={modalCreate.hideModal} hideBtnClose className='min-w-[876px] w-full'>
        <form onSubmit={handleSubmit(handleCreate)} className="flex flex-col items-center gap-6">
          <div className="flex flex-col gap-3 w-full">
            <Label>Name</Label>
            <SelectWithEmptyState
              value={selectedName}
              onChange={handleAuditorChange}
              options={auditorNames}
              placeholder="Choose Auditor Name"
            />
            <Input type="email" label="Email" disabled placeholder="Autofill" error={errors.email?.message} {...register("email" )} />
            <Input label="Department" disabled placeholder="Autofill" error={errors.department?.message} {...register("department" )} />
            <Input label="Position" placeholder="Input position" error={errors.position?.message} {...register("position")}/>
            <Label>Role</Label>
            <SelectWithEmptyState
              value={selectedRole}
              onChange={handleRoleChange}
              options={roles}
              placeholder="Choose Role"
            />
          </div>
          {/* Upload Photo Section */}
          <FileUploadInput />
          <div className="grid grid-cols-2 gap-2 w-full"> 
            <Button type="button" text="Cancel" variant="dangers" disabled={mutation.isPending} onClick={handleCancel} />
            <Button type="submit" text="Submit" variant="gradien" disabled={mutation.isPending || !isValid} load={mutation.isPending} />
          </div>
        </form>
      </ModalForm>
    </>
  );
}
