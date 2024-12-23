import {
    Pagination,
    PaginationContent,
    PaginationEllipsis,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
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

    console.log(totalPageCount);
    // Generate an array of page numbers dynamically with ellipsis logic
    const generatePageNumbers = (): (number | string)[] => {
      const pageNumbers: (number | string)[] = [];
      const maxVisiblePages = 5;
  
      if (totalPageCount <= maxVisiblePages) {
        for (let page = 1; page <= totalPageCount; page++) {
          pageNumbers.push(page);
        }
      } else {
        const startPage = Math.max(2, activePage - 1);
        const endPage = Math.min(totalPageCount - 1, activePage + 1);
  
        pageNumbers.push(1);
        if (startPage > 2) pageNumbers.push("...");
        for (let page = startPage; page <= endPage; page++) {
          pageNumbers.push(page);
        }
        if (endPage < totalPageCount - 1) pageNumbers.push("...");
        pageNumbers.push(totalPageCount);
      }
  
      return pageNumbers;
    };
  
    return (
      <Pagination>
        <PaginationContent>
          {/* Previous Button */}
          <PaginationItem>
            <PaginationPrevious
              href={activePage > 1 ? "#" : undefined}
              onClick={() => activePage > 1 && onPageSelect(activePage - 1)}
              className={activePage === 1 ? "cursor-not-allowed opacity-50" : ""}
            />
          </PaginationItem>
  
          {/* Page Links */}
          {generatePageNumbers().map((pageNumber, index) => (
            <PaginationItem key={index}>
              {typeof pageNumber === "number" ? (
                <PaginationLink
                  href="#"
                  isActive={pageNumber === activePage}
                  onClick={() => onPageSelect(pageNumber)}
                >
                  {pageNumber}
                </PaginationLink>
              ) : (
                <PaginationEllipsis />
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
              className={
                activePage === totalPageCount
                  ? "cursor-not-allowed opacity-50"
                  : ""
              }
            />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    );
  }
  