export const  generateStringDate = (fecha) => {
    const opcionesFecha = { day: 'numeric', month: 'long', year: 'numeric' };
    const fechaFormateada = new Date(fecha).toLocaleDateString('es-ES', opcionesFecha);
    return fechaFormateada
  }