import { useModalConfirm } from '@/hooks/use-modal-confirm';
import type { UserData } from '../types/user';
import ModalDelete from '@/components/ui/modals/modal-delete';
import { useDeleteUser } from '../api/delete-user';
import { useModalStore } from '@/hooks/use-modal-store';
import { ButtonAction } from '@/components/ui/button-action';

export default function DeleteUser({ user }: { user: UserData }) {
  const mutation = useDeleteUser({});
  
  const modalSuccess = useModalStore("modalSuccess");
  const modalFailed = useModalStore("modalFailed");
  const modalDelete = useModalConfirm();

  const handleDelete = () => {
    modalDelete.handleConfirm({
      heading : "Confirm Delete",
      message : "This action will delete this user permanently and you cannot undo this action. Are you sure you want to continue?",
      onCancel: modalDelete.hideModal,
      onSubmit: async () => {
        try {
          await mutation.mutateAsync({ id: user.id });

          modalDelete.hideModal();
          modalSuccess.openModal("User data has been successfully deleted.");

        } catch (error: any) {
          modalDelete.hideModal();
          modalFailed.openModal(error.message);
        }
      },
    });
  }

  return (
    <>
      <ButtonAction
        actions={[ 
          { type: "delete", onClick: handleDelete }
        ]}
      />
      <ModalDelete visible={modalDelete.visible} heading={modalDelete.options.heading} message={modalDelete.options.message} onSubmit={modalDelete.onConfirm} onCancel={modalDelete.hideModal} loading={modalDelete.loading} />
    </>
  );
}
