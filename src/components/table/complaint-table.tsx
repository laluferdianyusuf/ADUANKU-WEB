"use client";

import { useState, useEffect, useRef } from "react";
import {
  ColumnDef,
  ColumnFiltersState,
  SortingState,
  VisibilityState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";
import {
  ArrowUpDown,
  ChevronDown,
  FileDown,
  ListFilter,
  MoreHorizontal,
  Plus,
  Search,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Separator } from "../ui/separator";
import { DatePickerWithRange } from "../ui/date-range-picker";
import {
  ArrowDownOnSquareIcon,
  ArrowDownOnSquareStackIcon,
  DocumentArrowDownIcon,
} from "@heroicons/react/24/outline";

const data: Payment[] = [
  {
    id: "number",
    name: "diva",
    kekerasan: "fisik",
    lokus: "Area kerja",
    interest: "Memasak",
    date: "21-September-2025",
    status: "pending",
  },
  {
    id: "number",
    name: "jihan",
    kekerasan: "fisik",
    lokus: "Area kerja",
    interest: "Menari",
    date: "21-September-2025",
    status: "pending",
  },
  {
    id: "number",
    name: "hana",
    kekerasan: "fisik",
    lokus: "Area kerja",
    interest: "Menjahit",
    date: "21-September-2025",
    status: "pending",
  },
  {
    id: "number",
    name: "kolo",
    kekerasan: "fisik",
    lokus: "Area kerja",
    interest: "Menenun",
    date: "21-September-2025",
    status: "pending",
  },
  {
    id: "number",
    name: "dede",
    kekerasan: "fisik",
    lokus: "Area kerja",
    interest: "Mengajar",
    date: "21-September-2025",
    status: "pending",
  },
];

export type Payment = {
  id: string;
  name: string;
  kekerasan: string;
  lokus: string;
  status: "pending" | "processing" | "success" | "failed";
  interest: string;
  date: string;
};

export const columns: ColumnDef<Payment>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && "indeterminate")
        }
        onCheckedChange={(value: boolean) =>
          table.toggleAllPageRowsSelected(!!value)
        }
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value: boolean) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "name",
    header: ({ column }) => {
      return <div className="uppercase flex items-left justify-left">Name</div>;
    },
    cell: ({ row }) => (
      <div className="capitalize items-left justify-left">
        {row.getValue("name")}
        <div className="flex flex-row gap-2">
          <div>{row.original.kekerasan}</div>
          <div>-</div>
          <div>{row.original.lokus}</div>
        </div>
      </div>
    ),
  },
  {
    accessorKey: "interest",
    header: ({ column }) => {
      return (
        <div className="uppercase flex items-center justify-center">
          <Button
            variant="ghost"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
            className="uppercase"
          >
            Interest
            <ArrowUpDown />
          </Button>
        </div>
      );
    },
    cell: ({ row }) => (
      <div className="capitalize flex items-center justify-center">
        {row.getValue("interest")}
      </div>
    ),
  },
  {
    accessorKey: "date",
    header: ({ column }) => {
      return (
        <div className="flex items-center justify-center uppercase">Date</div>
      );
    },
    cell: ({ row }) => (
      <div className="lowercase flex items-center justify-center">
        {row.getValue("date")}
      </div>
    ),
  },
  {
    accessorKey: "Pengadu",
    header: ({ column }) => {
      return (
        <div className="uppercase flex items-center justify-center">
          Pengadu
        </div>
      );
    },
    cell: ({ row }) => (
      <div className="lowercase flex items-center justify-center">
        {row.getValue("Pengadu")}
      </div>
    ),
  },
  {
    accessorKey: "Pendamping",
    header: ({ column }) => {
      return (
        <div className="uppercase flex items-center justify-center">
          Pendamping
        </div>
      );
    },
    cell: ({ row }) => (
      <div className="lowercase flex items-center justify-center">
        {row.getValue("Pendamping")}
      </div>
    ),
  },
  {
    accessorKey: "status",
    header: ({ column }) => {
      return (
        <div className="uppercase flex items-center justify-center">Status</div>
      );
    },
    cell: ({ row }) => (
      <div className="lowercase flex items-center justify-center">
        {row.getValue("status")}
      </div>
    ),
  },
  {
    id: "actions",
    enableHiding: false,
    cell: ({ row }) => {
      const payment = row.original;

      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuItem
              onClick={() => navigator.clipboard.writeText(payment.id)}
            >
              Copy payment ID
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>View customer</DropdownMenuItem>
            <DropdownMenuItem>View payment details</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];

type ComplaintProps = {
  onClick: () => void;
};

export function ComplaintTable({ onClick }: ComplaintProps) {
  const [sorting, setSorting] = useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);
  const [columnVisibility, setColumnVisibility] = useState<VisibilityState>({});
  const [rowSelection, setRowSelection] = useState({});

  const table = useReactTable({
    data,
    columns,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: setRowSelection,
    state: {
      sorting,
      columnFilters,
      columnVisibility,
      rowSelection,
    },
  });

  const [activeTab, setActiveTab] = useState("all");
  const [underlineStyle, setUnderlineStyle] = useState({});
  const tabRefs = useRef<Record<string, HTMLButtonElement | null>>({});

  const tabs = [
    { label: "All client", value: "all" },
    { label: "Ongoing", value: "ongoing" },
    { label: "Closed", value: "closed" },
  ];

  useEffect(() => {
    const activeRef = tabRefs.current[activeTab];
    if (activeRef) {
      const { offsetLeft, offsetWidth } = activeRef;
      setUnderlineStyle({
        left: offsetLeft,
        width: offsetWidth,
      });
    }
  }, [activeTab]);

  return (
    <div className="w-full">
      <div className="flex">
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ullam, ad!
        </p>
        <div className="ml-auto flex gap-4">
          <button className="flex border-1 border-gray-300 p-2 rounded-md gap-1 cursor-pointer item-center">
            <ArrowDownOnSquareStackIcon className="size-5" />
            Export
          </button>
          <button
            onClick={onClick}
            className="bg-[#6d25e8] items-center text-white flex capitalize border-1 border-gray-300 p-2 rounded-md gap-1 cursor-pointer"
          >
            <Plus />
            add new complaint.
          </button>
        </div>
      </div>

      <div>
        <div className="flex gap-7 mt-5 font-medium relative">
          {tabs.map((tab) => (
            <button
              key={tab.value}
              ref={(el) => {
                tabRefs.current[tab.value] = el;
              }}
              onClick={() => setActiveTab(tab.value)}
              className={`cursor-pointer hover:text-[#432f94] pb-3 ${
                activeTab === tab.value ? "text-[#432f94] font-semibold" : ""
              }`}
            >
              {tab.label}
            </button>
          ))}
          {/* Animated Underline */}
          <div
            className="absolute bottom-[-2] h-[2px] bg-[#432f94] transition-all duration-300"
            style={underlineStyle}
          />
        </div>

        <Separator className="" />
      </div>

      <div className="flex items-center py-4">
        <div className="flex flex-row border-1 rounded-sm items-center px-2 ">
          <Search />
          <Input
            placeholder="Search For Complaint..."
            value={(table.getColumn("name")?.getFilterValue() as string) ?? ""}
            onChange={(event) =>
              table.getColumn("name")?.setFilterValue(event.target.value)
            }
            className="max-w-sm border-none shadow-none"
          />
        </div>
        <div className="flex ml-auto gap-3">
          <DatePickerWithRange />
          <button
            className="flex items-center justify-center gap-1 p-1.5 rounded-md max-w-sm border-1 w-28"
            value={(table.getColumn("date")?.getFilterValue() as string) ?? ""}
          >
            <ListFilter />
            Filter
          </button>
        </div>
        {/* <Button
          value={(table.getColumn("date")?.getFilterValue() as string) ?? ""}
          onChange={(event) =>
            table.getColumn("date")?.setFilterValue(event.target.value)
          }
          className="bg-white border-1 max-w-sm w-36 ml-auto"
        /> */}
        {/* <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="ml-auto">
              Columns <ChevronDown />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            {table
              .getAllColumns()
              .filter((column) => column.getCanHide())
              .map((column) => {
                return (
                  <DropdownMenuCheckboxItem
                    key={column.id}
                    className="capitalize"
                    checked={column.getIsVisible()}
                    onCheckedChange={(value) =>
                      column.toggleVisibility(!!value)
                    }
                  >
                    {column.id}
                  </DropdownMenuCheckboxItem>
                );
              })}
          </DropdownMenuContent>
        </DropdownMenu> */}
      </div>
      <div className="rounded-md border">
        <Table className="">
          <TableHeader className="">
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id} className="">
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead className="" key={header.id}>
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                    </TableHead>
                  );
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && "selected"}
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="h-24 text-center"
                >
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
      <div className="flex items-center justify-end space-x-2 py-4">
        <div className="flex-1 text-sm text-muted-foreground">
          {table.getFilteredSelectedRowModel().rows.length} of{" "}
          {table.getFilteredRowModel().rows.length} row(s) selected.
        </div>
        <div className="space-x-2">
          <Button
            variant="outline"
            size="sm"
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
          >
            Previous
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
          >
            Next
          </Button>
        </div>
      </div>
    </div>
  );
}
