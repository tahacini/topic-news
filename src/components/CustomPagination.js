const CustomPagination = (currentPage, pageNumbers, setPage) => {
  if (currentPage < 3 && pageNumbers[pageNumbers.length - 1] >= 5) {
    setPage((page) => page.slice(0, 5));
  } else if (
    currentPage >= 3 &&
    pageNumbers[pageNumbers.length - 1] >= currentPage + 2
  ) {
    setPage((page) => page.slice(currentPage - 3, currentPage + 2));
  }
  if (
    pageNumbers[pageNumbers.length - 1] >= 5 &&
    currentPage + 2 >= pageNumbers[pageNumbers.length - 1]
  ) {
    setPage((page) => page.slice(-5));
  }
};

export default CustomPagination;
