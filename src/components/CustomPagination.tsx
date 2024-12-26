import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
  PaginationEllipsis,
} from "@/components/ui/pagination";

interface CustomPaginationProps {
  totalPageCount: number;
  activePage: number;
  onPageSelect: (page: number) => void;
}

export function CustomPagination({
  totalPageCount,
  activePage,
  onPageSelect,
}: CustomPaginationProps) {
  const maxVisiblePages = 5;

  const generatePageNumbers = (): (number | "ellipsis")[] => {
    if (totalPageCount <= maxVisiblePages) {
      return Array.from({ length: totalPageCount }, (_, i) => i + 1);
    }

    const pages: (number | "ellipsis")[] = [1];
    const isNearStart = activePage <= 3;
    const isNearEnd = activePage >= totalPageCount - 2;

    if (isNearStart) {
      pages.push(2, 3, 4, "ellipsis", totalPageCount);
    } else if (isNearEnd) {
      pages.push("ellipsis", totalPageCount - 3, totalPageCount - 2, totalPageCount - 1, totalPageCount);
    } else {
      pages.push("ellipsis", activePage - 1, activePage, activePage + 1, "ellipsis", totalPageCount);
    }

    return pages;
  };

  const isDisabled = (condition: boolean) => (condition ? "cursor-not-allowed opacity-50" : "");

  return (
    <Pagination>
      <PaginationContent>
        {/* Previous Button */}
        <PaginationItem>
          <PaginationPrevious
            href={activePage > 1 ? "#" : undefined}
            onClick={() => activePage > 1 && onPageSelect(activePage - 1)}
            className={isDisabled(activePage === 1)}
          />
        </PaginationItem>

        {/* Page Links */}
        {generatePageNumbers().map((pageNumber, index) => (
          <PaginationItem key={index}>
            {pageNumber === "ellipsis" ? (
              <PaginationEllipsis />
            ) : (
              <PaginationLink
                href="#"
                isActive={pageNumber === activePage}
                onClick={() => onPageSelect(pageNumber)}
              >
                {pageNumber}
              </PaginationLink>
            )}
          </PaginationItem>
        ))}

        {/* Next Button */}
        <PaginationItem>
          <PaginationNext
            href={activePage < totalPageCount ? "#" : undefined}
            onClick={() =>
              activePage < totalPageCount && onPageSelect(activePage + 1)
            }
            className={isDisabled(activePage === totalPageCount)}
          />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
}
