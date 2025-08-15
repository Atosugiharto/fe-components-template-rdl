import { ButtonAction } from "@/components/ui/button-action";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

export interface Product {
  id: number;
  name: string;
}

interface TableConfigurationProps {
  products: Product[];
}


export default function TableConfiguration({ products}: TableConfigurationProps) {

    return (
            <Table className="rounded-t-lg overflow-hidden">
                <TableHeader>
                    <TableRow className="h-12 bg-neutral-1 border-none text-sm font-semibold">
                        <TableHead className="w-12 px-2">No</TableHead>
                        <TableHead className="flex-1">Product Group Name</TableHead>
                        <TableHead className="w-[112px] text-center">Action</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {products.map((product, idx) => (
                        <TableRow key={product.id} className="border-b border-neutral-2 h-[48px] text-sm">
                            <TableCell className="text-left">{idx + 1}</TableCell>
                            <TableCell className="flex-1">{product.name}</TableCell>
                            <TableCell className="w-[112px] flex gap-1">
                                <ButtonAction
                                    actions={[
                                        { type: "edit", onClick: () => console.log(`Edit ${product.id}`) },
                                        { type: "delete", onClick: () => console.log(`Delete ${product.id}`) },
                                    ]}
                                />
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
    )
}