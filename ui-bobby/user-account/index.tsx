import { Gauge } from "lucide-react";
import UserTable from "@/domain/user/components/user-table";
import ModalSuccess from "@/components/ui/modals/modal-success";
import ModalConfirm from "@/components/ui/modals/modal-confirm";
import { BreadcrumbMenu } from "@/components/ui/breadcrumb-menu";
import ModalFailed from "@/components/ui/modals/modal-failed";
import TopBar from "@/components/ui/top-bar";
import CreateUser from "@/domain/user/components/create-user";
import { useModalStore } from "@/hooks/use-modal-store";
import { useModalConfirmStore } from "@/hooks/use-modal-confirm-store";

export default function UserAccount() {
  const modalSuccess = useModalStore("modalSuccess");
  const modalFailed = useModalStore("modalFailed");
  const modalSubmit = useModalConfirmStore("modalSubmit");
  
  return (
    <>
      <div className="flex flex-col gap-2 w-full">
        <TopBar
          breadcrumb={
            <BreadcrumbMenu
              homeIcon={Gauge}
              items={[
                { name: "Users", link: "/admin/users/user-account" },
                { name: "Users", link: "/admin/users/user-account" },
                { name: "Users Account", isActive: true },
              ]}
            />
          }
        />
        <div className="flex flex-col gap-4 p-6 rounded-xl shadow bg-white">
          <div className="flex items-end justify-between">
            <p className="font-bold text-2xl text-[#000]">Users</p>
            <CreateUser />
          </div>
          <div className="flex flex-col gap-2">
            <UserTable />
          </div>
        </div>
      </div>
      <ModalFailed  visible={modalFailed.visible} message={modalFailed.message} setOpen={modalFailed.hideModal} />
      <ModalSuccess visible={modalSuccess.visible} message={modalSuccess.message} onClose={modalSuccess.hideModal} />
      <ModalConfirm visible={modalSubmit.visible} loading={modalSubmit.loading} heading={modalSubmit.options.heading} message={modalSubmit.options.message} btnText={modalSubmit.options.btnText} onSubmit={modalSubmit.onConfirm} onCancel={modalSubmit.options.onCancel} />
    </>
  );
}