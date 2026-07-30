import { Badge } from "@/client/components/ui/badge";
import {
    Table,
    TableBody,
    TableCell,
    TableRow,
} from "@/client/components/ui/table";

import { ArrowSquareOutIcon, BarcodeIcon, CalendarBlankIcon, CardsIcon, FileIcon, FolderOpenIcon, HouseIcon, TagIcon, TranslateIcon, UserIcon } from "@phosphor-icons/react";

function InfoTable() {
    return (
        <div className="rounded-[8px] border border-border w-full p-2 bg-card">
            <Table className="bg-card">
                <TableBody>
                    <TableRow>
                        <TableCell className="flex flex-row items-center gap-x-2">
                            <UserIcon size={20} />
                            <span className="text-sm">
                                Author
                            </span>
                        </TableCell>
                        <TableCell>
                            Maziyar Isanezhad
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell className="flex flex-row items-center gap-x-2">
                            <CalendarBlankIcon size={20} />
                            <span className="text-sm">
                                Published Year
                            </span>
                        </TableCell>
                        <TableCell>
                            Maziyar Isanezhad
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell className="flex flex-row items-center gap-x-2">
                            <FolderOpenIcon size={20} />
                            <span className="text-sm">
                                Paper Type
                            </span>
                        </TableCell>
                        <TableCell>
                            Maziyar Isanezhad
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell className="flex flex-row items-center gap-x-2">
                            <TagIcon size={20} />
                            <span className="text-sm">
                                Category
                            </span>
                        </TableCell>
                        <TableCell>
                            <Badge>
                                Maziyar Isanezhad
                            </Badge>
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell className="flex flex-row items-center gap-x-2">
                            <TranslateIcon size={20} />
                            <span className="text-sm">
                                Language
                            </span>
                        </TableCell>
                        <TableCell>
                            Maziyar Isanezhad
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell className="flex flex-row items-center gap-x-2">
                            <HouseIcon size={20} />
                            <span className="text-sm">
                                Publisher
                            </span>
                        </TableCell>
                        <TableCell>
                            Maziyar Isanezhad
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell className="flex flex-row items-center gap-x-2">
                            <BarcodeIcon size={20} />
                            <span className="text-sm">
                                DOI
                            </span>
                        </TableCell>
                        <TableCell>
                            <div className="flex flex-row items-center gap-x-3">
                                <span className="font-mono">
                                    10.1000/182 / arixV
                                </span>
                                <ArrowSquareOutIcon size={20} />
                            </div>
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell className="flex flex-row items-center gap-x-2">
                            <FileIcon size={20} />
                            <span className="text-sm">
                                Pages
                            </span>
                        </TableCell>
                        <TableCell>
                            Maziyar Isanezhad
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell className="flex flex-row items-center gap-x-2">
                            <CardsIcon size={20} />
                            <span className="text-sm">
                                File Size
                            </span>
                        </TableCell>
                        <TableCell>
                            Maziyar Isanezhad
                        </TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </div>
    );
};

export default InfoTable;