import type { UserData } from '../types/user';
import { ButtonAction } from '@/components/ui/button-action';
import { useModal } from '@/hooks/use-modal';
import { Button } from '@/components/ui/button';
import { Edit, SquarePen } from 'lucide-react';
import InvoiceDetail from '@/components/ui/invoice-detail';

export default function ViewUser({ user }: { user: UserData }) {
  const modalDetail = useModal();
  
  return (
    <>
      <ButtonAction
        actions={[ 
          { type: "view", onClick: modalDetail.openModal }
        ]}
      />
      {/* Modal Detail User */}
      {modalDetail.visible && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 bg-opacity-30">
          <div className="bg-white rounded-xl shadow-lg p-8 w-[1110px] relative">
            <button className="absolute top-4 right-4" onClick={modalDetail.hideModal}>
              <span className="sr-only">Close</span>
              <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
            </button>
            <h2 className="text-xl font-semibold mb-6">Detail Account</h2>
            <div className="flex gap-8">
              <div className="flex flex-col items-center gap-2">
                <img src={user.photo || '/src/assets/images/avatar.jpg'} alt="Profile" className="w-[233px] rounded-xl object-cover" />
                <Button 
                  variant="primary" 
                  icon={<Edit size={18}/>} 
                  className="mt-2"
                  text={<span className='bg-[linear-gradient(90deg,#1874A5,#A31AF2)] bg-clip-text text-transparent'>Change Photo</span>}
                />
              </div>
              {/* Info */}
                    <div className="flex flex-col justify-between flex-1 bg-neutral-2 p-6 rounded-xl h-[286px]">
                        <InvoiceDetail
                            parentProps={{ className: "border-none rounded-none"}}
                            gridProps={{ className: "gap-y-11 gap-x-6" }}
                            grid="3"
                            fields={[
                                { label: "Status", value: user.status ? <p className='text-green-500'>Active</p> : "Inactive"},
                                { label: "Name", value: user?.name},
                                { label: "Email", value: user?.email},
                                { label: "Department", value: user?.department},
                                { label: "Position", value: user?.position},
                                { label: "Role", value: user?.role},
                            ]}
                        />
                        <div className="flex justify-end w-full">
                            <Button className="w-fit" variant={"gradien"} text="Edit Account" icon={<SquarePen size={24} color="white"/>}/>
                        </div>
                    </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
