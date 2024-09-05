import React, { useMemo } from "react";
import '../../pages/Dictionary/style.css';
import {
    MaterialReactTable,
    useMaterialReactTable
} from "material-react-table";

const data = [
    {
        word: "Tisch",
        translatedWord: "Table"
    },
    {
        word: "Stuhl",
        translatedWord: "Chair"
    }
];

export default function WordTable() {
    const columns = useMemo(
        () => [
            {
                accessorKey: "word",
                header: "Word",
                Cell: ({ renderedCellValue }) => <strong>{renderedCellValue}</strong>
            },
            {
                accessorFn: (row) => row.translatedWord,
                id: "translatedWord",
                header: "translatedWord",
                Header: <i>Translated Word</i>
            }
        ],
        []
    );

    const table = useMaterialReactTable({
        data,
        columns,
        enableKeyboardShortcuts: false,
        enableColumnActions: false,
        enableColumnFilters: false,
        enablePagination: false,
        enableSorting: false,
        enableDensityToggle: false,
        enableTopToolbar: false,
        enableBottomToolbar: false,
        mrtTheme: (theme) => ({
            baseBackgroundColor: "rgba(0,0,0, 0)"
        }),
        muiTableBodyRowProps: { hover: false },
        muiTableProps: {
            sx: {
                border: '1px solid  rgba(255,255,255, 1)',
                color: 'white',
                caption: {
                    captionSide: 'top',
                },
            },
        },
        muiTableHeadCellProps: {
            sx: {
                border: '1px solid rgba(255,255,255, 1)',
                fontStyle: 'italic',
                fontWeight: 'normal',
                color: 'white'
            },
        },
        muiTableBodyCellProps: {
            sx: {
                border: '1px solid  rgba(255,255,255, 1)',
                color: 'white'
            },
        },
        renderCaption: ({ table }) =>
            ``,
    });

    return <MaterialReactTable table={table} />;
}