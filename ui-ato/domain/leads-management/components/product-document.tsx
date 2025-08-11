import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

export default function ProductDocumentTables() {
  const productGroups = [
    { no: 1, industry: "Manufacturing Industry", productName: "Aksesoris (Clothing Accessories)" },
    { no: 2, industry: "Kitchen", productName: "Alat Kesehatan (Medical Devices)" }
  ];

  const documents = [
    { id: 1, name: "NIB", desc: "Especially for Overseas Company : NIB Importir & Bussines License" },
    { id: 2, name: "Daftar Fasilitas", desc: "Facility List" },
    { id: 3, name: "Daftar Produk", desc: "Product List" },
    { id: 4, name: "Daftar Bahan dan Matriks Bahan vs Produk", desc: "Material List and Matrix of Material vs Product (For development submission, material list include : new material & existing material that used for registered product)" },
    { id: 5, name: "Diagram Alir Proses Produksi Produk Halal", desc: "Flow Process Chart of Halal Registered Product" },
    { id: 6, name: "Manual SJPH (Semua Lampiran Manual wajib diupload)", desc: "SJPH Manual (All Manual Attachment must be uploaded)" },
    { id: 7, name: "Surat Pernyataan Fasilitas Bebas Babi", desc: "Statement of porcine free facility" }
  ];

  return (
    <div className="space-y-6">
      {/* Product Group Table */}
      <Card className="border-none shadow-none">
        <CardContent className="p-0">
          <h2 className="font-semibold text-lg mb-4">List Product Group</h2>
          <Table className="[&_tr]:border-b [&_tr]:border-gray-200">
            <TableHeader className="bg-neutral-3">
              <TableRow>
                <TableHead className="w-[50px]">No</TableHead>
                <TableHead>Industry</TableHead>
                <TableHead>Product Name</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {productGroups.map((pg) => (
                <TableRow key={pg.no}>
                  <TableCell>{pg.no}</TableCell>
                  <TableCell>{pg.industry}</TableCell>
                  <TableCell>{pg.productName}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      {/* Document List Table */}
      <Card className="border-none shadow-none">
        <CardContent className="p-0">
          <h2 className="font-semibold text-lg mb-4">List Document</h2>
          <Table className="[&_tr]:border-b [&_tr]:border-gray-200">
            <TableHeader className="bg-neutral-3">
              <TableRow>
                <TableHead className="w-[100px]">Document ID</TableHead>
                <TableHead>Document Name</TableHead>
                <TableHead className="w-[100px] text-center">Document</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {documents.map((doc) => (
                <TableRow key={doc.id}>
                  <TableCell>{doc.id}</TableCell>
                  <TableCell>
                    <div className="font-medium">{doc.name}</div>
                    {doc.desc && <div className="text-sm text-muted-foreground italic">{doc.desc}</div>}
                  </TableCell>
                  <TableCell className="text-center">
                    <Button className="bg-green-100">
                      <Download className="h-5 w-5 text-green-700" />
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}
