export const getTotalPages = (totalpages, cantidad) => {
  //mando total de paginas en el paginador
  const Paginas = Math.ceil(totalpages / cantidad);
  return Paginas;
};
