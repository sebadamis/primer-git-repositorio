function formatTimestampToDate(fecha) {
    
    // forma de formatear fechas internacionales (us-ar)
    const collator = new Intl.DateTimeFormat("es-AR", {
        day: "2-digit",
        month: "2-digit",
        year: "numeric"
    });

    const fechaFormateada = collator.format(fecha);

    // console.log(fechaFormateada);

    return fechaFormateada;


    // formateo de fecha con el objeto date

    // const dateObject = new Date(fecha)
    // const year = dateObject.getFullYear();

    // let month = dateObject.getMonth()+1;

    // if(month <10){
    //     month = "0" + month
    // }
    // const day = dateObject.getDate();

    // return `${day}/${month}/${year}`;

    
}