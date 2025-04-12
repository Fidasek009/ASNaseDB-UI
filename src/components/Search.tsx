"use client";

import { Search as SearchIcon } from "@mui/icons-material";
import { TextField, InputAdornment, IconButton, Stack } from "@mui/material";
import { useState } from "react";
import ProteinTable from "@/components/ProteinTable";

import { searchProteinData } from "@/util/api";
import ProteinData from "@/types/ProteinData";


export default function Search() {
    const [query, setQuery] = useState("");
    const [searchResults, setSearchResults] = useState<ProteinData[]>([]);
    const [loading, setLoading] = useState(false);

    const handleSearch = async () => {
        setLoading(true);
        const results = await searchProteinData(query);
        setSearchResults(results);
        setLoading(false);
    };

    return (
        <Stack spacing={2} sx={{ marginBottom: 2 }}>
            <TextField
                variant="outlined"
                fullWidth
                placeholder="Search..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onKeyDown={(e) => {
                    if (e.key === "Enter") {
                        handleSearch();
                    }
                }}
                slotProps={{
                    input: {
                        endAdornment: (
                            <InputAdornment position="end">
                                <IconButton edge="end" aria-label="search" onClick={handleSearch}>
                                    <SearchIcon />
                                </IconButton>
                            </InputAdornment>
                        ),
                    },
                }}
            />

            {/* Display search results */}
            <ProteinTable proteinData={searchResults} loading={loading} />
        </Stack>
    );
}
