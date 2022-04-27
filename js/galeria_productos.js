let productos = [];

function llenarProductos(){
	productos.push({
		id:1,
		nombre:"Messenger Bag",
		precio:799,
		imagen:"b1.jpg",
		estrellas:3,
		descuento:.2
	});
	productos.push({
		id:2,
		nombre:"Shoulder Bag (Pink)",
		precio:799,
		imagen:"b2.jpg",
		estrellas:3,
		descuento:.3
	});
	productos.push({
		id:3,
		nombre:"Sling Bag",
		precio:599,
		imagen:"b3.jpg",
		estrellas:3,
		descuento:.2
	});
	productos.push({
		id:4,
		nombre:"Tote (Blue)",
		precio:799,
		imagen:"b4.jpg",
		estrellas:4,
		descuento:.1
	});
	productos.push({
		id:5,
		nombre:"Satchel (Yellow)",
		precio:999,
		imagen:"b5.jpg",
		estrellas:5,
		descuento:0
	});
	productos.push({
		id:6,
		nombre:"Shoulder Bag (Orange)",
		precio:799,
		imagen:"b6.jpg",
		estrellas:3,
		descuento:.4
	});
	productos.push({
		id:7,
		nombre:"Hobo (Blue)",
		precio:500,
		imagen:"b7.jpg",
		estrellas:4.5,
		descuento:.1
	});
	productos.push({
		id:8,
		nombre:"Satchel (Pink)",
		precio:400,
		imagen:"b8.jpg",
		estrellas:3.5,
		descuento:.6
	});
	productos.push({
		id:9,
		nombre:"Street Bag",
		precio:599,
		imagen:"b2.jpg",
		estrellas:3.8,
		descuento:.3
	});
	productos.push({
		id:10,
		nombre:"Tote market",
		precio:399,
		imagen:"b6.jpg",
		estrellas:4.1,
		descuento:.4
	});
	productos.push({
		id:11,
		nombre:"Camel Bag",
		precio:299,
		imagen:"b8.jpg",
		estrellas:2.5,
		descuento:0
	});
	productos.push({
		id:12,
		nombre:"Cargo Bag",
		precio:799,
		imagen:"b7.jpg",
		estrellas:5,
		descuento:0
	});
}

function armarProducto(info_producto){

	let producto = `
	<div class="col-lg-3 shop-info-grid text-center mt-4">
            <div class="product-shoe-info shoe">
                <div class="men-thumb-item">
                    <img src="images/${info_producto.imagen}" class="img-fluid" alt="">

                </div>
                <div class="item-info-product">
                    <h4>
                        <a href="single.html">${info_producto.nombre}</a>
                    </h4>

                    <div class="product_price">
                        <div class="grid-price">
                            <span class="money"><span class="line">${info_producto.precio}</span> $675.00</span>
                        </div>
                    </div>
                    <ul class="stars">
                        <li><a href="#"><span class="fa fa-star" aria-hidden="true"></span></a></li>
                        <li><a href="#"><span class="fa fa-star" aria-hidden="true"></span></a></li>
                        <li><a href="#"><span class="fa fa-star-half-o" aria-hidden="true"></span></a></li>
                        <li><a href="#"><span class="fa fa-star-half-o" aria-hidden="true"></span></a></li>
                        <li><a href="#"><span class="fa fa-star-o" aria-hidden="true"></span></a></li>
                    </ul>
                </div>
            </div>
        </div>`;

    return producto;
}

function pintarGaleria(){
	let html = '';
	let contador = 1;
	let contenedor = document.querySelector(".galeria");

	llenarProductos();

	for(var i in productos){

		html += (contador==1)?'<div class="row shop-wthree-info text-center">':'';
		html += armarProducto(productos[i]);
		if(contador==4)
		{
			html += '</div>';
			contador = 1;
		}
		else{
			contador++;
		}
	}
    html += "<br><br>";
	contenedor.innerHTML = html;
}