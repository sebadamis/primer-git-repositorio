const products = [
    {
        createdAt: -172800000,
        name: "Nike Juniper Pro Trail 2 GORE-TEX",
        image: "https://nikearprod.vtexassets.com/arquivos/ids/877894-1200-1200?width=1200&height=1200&aspect=true",
        price: 199999,
        description: "The slim & simple Maple Gaming Keyboard from Dev Byte comes with a sleek body and 7- Color RGB LED Back-lighting for smart functionality",
        category: "mountain",
        id: "38"
        },
        {
        createdAt: 1717113600000,
        name: "Clifton 9",
        image: "https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1660043072-hoka-bondi-8-zapatillas-running-1660043036.png?crop=1.00xw:0.823xh;0,0.0783xh&resize=980:*",
        price: 100000,
        description: "La novena versión de nuestra galardonada gama Clifton ofrece una versión más ligera y con más amortiguación que nunca. Las nuevas Clifton 9 reducen el peso al tiempo que añaden 3 mm de altura; además, ofrecen una experiencia revitalizada bajo los pies con una nueva espuma con capacidad de respuesta y un diseño de suela mejorado",
        category: "running",
        id: "43"
        },
        {
        createdAt: 1716076800000,
        name: "Nike Invencible 3 Pro",
        image: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/28810afe-6b6a-4f6a-beb4-701a3539bb02/invincible-3-zapatillas-de-running-asfalto-9lqlcK.png",
        price: 365100,
        description: "Test de imagenmmmmmm",
        category: "running",
        id: "44"
        },
        {
        createdAt: -27076636800000,
        name: "Nike Air Force 1 07",
        image: "https://nikearprod.vtexassets.com/arquivos/ids/659742-1200-1200?width=1200&height=1200&aspect=true",
        price: 209999,
        description: "La luminosidad sigue viva con este calzado de básquetbol original. La fusión de la comodidad de la duela y un estilo externo a la cancha le da un giro fresco a lo que mejor conoces: una confección inspirada en los años 80, detalles audaces y un estilo basquetbolero puro.",
        category: "moda",
        id: "46"
        },
        {
        createdAt: 1719276313261,
        name: "Nike Pegasus 39 Shield",
        image: "https://static.nike.com/a/images/t_default/c7cee966-efba-4fc4-99ce-ab2ccacf9f81/infinityrn-4-gore-tex-zapatillas-de-running-asfalto-impermeables-BcdT0P.png",
        price: 167999,
        description: "Tu caballo alado regresa para ayudarte a avanzar bajo la lluvia. El acabado repelente al agua te ayuda a mantener los pies secos, mientras que una sensación cómoda, similar al tejido Fleece, en el interior mantiene los pies abrigados para carreras en climas",
        category: "running",
        id: "47"
        },
        {
        createdAt: 1648598400000,
        name: "Nike SB Dunk Low Pro",
        image: "https://nikearprod.vtexassets.com/arquivos/ids/914361-1200-1200?width=1200&height=1200&aspect=true",
        price: 209000,
        description: "El Nike SB Dunk Low Pro ofrece el aspecto icónico del Dunk con un estilo de perfil bajo. La unidad Zoom Air en el talón y la lengüeta acolchada proporcionan un nivel de comodidad ideal para practicar skate.",
        category: "moda",
        id: "48"
    }
];

const tableBodyHtml = document.getElementById("table-body");
const formAdminHTML = document.getElementById("form-admin");



renderProduct(products);

function renderProduct(arrayToRender) {

    //para iniciar con el table body en blanco
    // porque sino la tabla tiene contenido y cada vez que booro 1 elemento, me vuelve a hacer el bucle y me imprime de nuevo los demas elementos menos el borrado
    tableBodyHtml.innerHTML = "";

    let total = 0;

    arrayToRender.forEach((prod) => {
    
        total += prod.price;

        tableBodyHtml.innerHTML += `<tr>
        <td class="product-image">
            <img src="${prod.image}" alt="${prod.name}">
        </td>
        <td class="product-name">
            ${prod.name}
        </td>
        <td class="product-description">
            <div class="description" title="${prod.description}"> 
                ${prod.description}
            </div>
    
        </td>
        <td class="product-fecha">
            ${formatTimestampToDate(prod.createdAt)}
        </td>
        <td class="product-precio">
            $ ${prod.price}
        </td>
        <td class="product-accion">
            <button class="btn btn-primary btn-sm">
                <i class="fa-solid fa-pen"></i>
            </button>
            <button class="btn btn-danger btn-sm" onclick="deleteproduct('${prod.id}')">
                <i class="fa-solid fa-trash"></i>
            </button>
        </td>
    </tr>`;
    });

};

tableBodyHtml.innerHTML += `<tr>
                                <td colspan="4" class="text-end">total</td>
                                <td colspan="2" class="fw-bold">${total}</td>
                            </tr>`


function deleteproduct(identificador) {
    // console.log("id recibido", identificador);
    const index = products.findIndex(producto => {
        if (identificador === producto.id) {
            return true
        } else {
            return false
        }

    });
    products.splice(index, 1);
    renderProduct(products);
}

function searchProduct(evt) {
    // console.log(evt.target.value);

    let text = evt.target.value;
    text = text.toLocaleLowerCase();

    const productosFiltrados = products.filter((productito) => {
        const nombre = productito.name.toLocaleLowerCase();
        const descripcion = productito.description.toLocaleLowerCase();

        // filtra tanto por nombre como por descripcion
        if (nombre.includes(text) || descripcion.includes(text) ) {
            return true;
        } else {
            return false;
        }
    });
    // console.log(productosFiltrados);
    renderProduct(productosFiltrados);
};

formAdminHTML.addEventListener("submit", (evt)=>{
    evt.preventDefault();
    // console.log("formulario enviado");
    
    const el = evt.target.elements;

    const nuevoProduct = {
        name: el.name.value,
        price: el.precio.valueAsNumber,
        imagen: el.imagen.value,
        categoria: el.category.value,
        description: el.description.value,
        createdAt: el.createdAt.valueAsNumber,
        id: crypto.randomUUID()
    };

    // console.log(nuevoProduct);

    products.push(nuevoProduct);
    renderProduct(products);

    //para reiniciar listado de productos
    // formAdminHTML.reset();

    // poner foco en un input del form
    // name.focus();
});



