import { Plus } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { useModalConfirmStore } from '@/hooks/use-modal-confirm-store';
import { Input } from '@/components/ui/forms/input';
import ModalForm from '@/components/ui/modals/modal-form';
import { useModal } from '@/hooks/use-modal';
import { useModalStore } from '@/hooks/use-modal-store';

export default function CreateRole() {

    const modalCreate = useModal();
    const modalSuccess = useModalStore("modalSuccess");
    const modalFailed = useModalStore("modalFailed");
    const modalSubmit = useModalConfirmStore("modalSubmit");

    const handleCreate = () => {
        modalSubmit.handleConfirm({
        heading : "Are you sure about the data entered?",
        message : "Are you sure you want to save this user data?",
        onCancel: modalSubmit.hideModal,
        onSubmit: async () => {
                try {
                    modalCreate.hideModal();
                    // modalSubmit.hideModal();
                    modalSuccess.openModal("Your data has been successfully saved.");

                } catch (error: any) {
                    // modalSubmit.hideModal();
                    modalFailed.openModal(error.message);
                }
            },
        });
    }

    return (
        <>
            <Button 
                icon={<Plus />} 
                text={"Create New Role"} 
                onClick={() => modalCreate.openModal()} 
                variant="gradien" 
                className="w-fit" 
            />
            <ModalForm heading="Create New Role" visible={modalCreate.visible} onClose={modalCreate.hideModal} hideBtnClose>
                <form onSubmit={handleCreate} className="flex flex-col items-center gap-6">
                    <div className="flex flex-col gap-3 w-full">
                        <Input label="Role Name" placeholder="Input role" />
                    </div>
                    <div className="grid grid-cols-2 gap-2 w-full">
                        <Button type="button" text="Cancel" variant="dangers" onClick={modalCreate.hideModal}/>
                        <Button type="submit" text="Submit" variant="gradien" />
                    </div>
                </form>
            </ModalForm>
        </>
    );
}
