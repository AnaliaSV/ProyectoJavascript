
function renderProducts() {
    $('#productsContent').empty();
    $('#productsBebida').empty();

    const mlSearch = `./js/data.json`;
    $.ajax({
        method:"GET",
        dataType: "json",
        url:mlSearch
    }).done((products)=>{
        function addOrder(product) {
            order.push(product);
            renderOrder();
        }
        
        function renderOrder() {
            $selectedProductsContainer.empty();
            let total = 0;
            order.forEach(function(product, index) {
                $selectedProductsContainer.append(
                 `<div class="card card-modal" style="max-width: 540px;">
                    <div class="no-gutters card-body-modal">
                        <div>
                            <div class="card-body card-body-padding">
                                <div class="d-flex card-body-padding m-auto pl-0 pb-0">
                                    <div class="card-body col-md-8 m-auto p-0">
                                        <h4 class="card-title mb-0 font-weight-bold">${product.name}</h4>
                                    </div>
                                    <div class=" card-body col-md-4 p-0 d-flex justify-content-end"> 
                                    <button type="button" class=" btn-circle removeBtn mdi mdi-close-circle" data-ind="${index}" style="color:black; cursor:pointer;" title="Borrar"></button>
                                    </div>
                                </div>
                                <p class="card-text">${product.tags}<br>Precio:$${product.price}</p>    
                            </div>
                        </div>
                    </div>
                </div>`);
                        total = total + product.price;
                }); 
            $('.totalPrice').html(`TOTAL:$${total}`);

            $('.removeBtn').click((event)=> {
                const removeIndex = order.findIndex(product => product.id == event.target.dataset.id);
                order.splice(removeIndex, 1);
                renderOrder();
              })
        }
        
        products.forEach((product, index) => {
            if(product.type==="Combos Hamburguesas") { 
            $productsContent.append(
            `<div class="col-lg-4 col-md-12 mb-4"> 
            <div class="card border-2">      
                <div class="card-body">
                  <div class="container-overlay"> 
                      <img class="hover-img img-fluid mb-2" src="${product.thumbnail}">
                      <div class="overlay">
                      </div>
                  </div>
                  <h5 class="font-weight-bold">${product.name}</h5>
                    <p>${product.description}</p> 
                    <p class="font-weight-bold">Precio: $${product.price}</p>
                    <button class="btn btn-color btnProduct" data-ind="${index}">Add to cart</button>
                </div>
            </div>
          </div>`)} 
            
            else {
            $productsBebida.append(
            `
            <div class="col-lg-4 col-md-12 mb-4"> 
               <div class="card border-2">      
                    <div class="card-body">
                    <div class="container-overlay">
                    <img class="hover-img img-fluid mb-2" src="${product.thumbnail}">
                        <div class="overlay">
                        </div>
                    </div>
                        <h5 class="font-weight-bold">${product.name}</h5>
                        <p>${product.description}</p> 
                        <p class="font-weight-bold">Precio: $${product.price}</p>
                        <button class="btn btn-color btnProduct" data-ind="${index}">Add to cart</button>
                    </div>
                </div>
            </div>`)}
        });

        $('.btnProduct').click((event)=> {
            const productSelected = products[$(event.target).data('ind')];
            addOrder(productSelected);
        });
    }).fail((error)=>{
        console.log(error);
        });        
}

    $('document').ready(() => {
        $productsContent = $('#productsContent');
        $productsBebida = $('#productsBebida');
        $

        $modalCarrito = $('#modalCarrito');
        $selectedProductsContainer =$('#selectedProductsContainer');
        renderProducts();

    $("form[name='searchForm']").validate({
            rules: {
                name: {
                    required: true,
                    minlength: 3,
                },
                email: {
                    required: true,
                    minlength: 7,
                },
                comment: {
                    required:3,
                }
            },
            messages: {
                name: {
                    required: 'Campo obligatorio',
                    minlength: 'Minimo 3 caracteres',
                },
                email: {
                    required: 'Campo obligatorio',
                    email: 'Escribe un email válido',
                },
                comment: {
                    required: 'Escribe un comentario',
                },
            },
            submitHandler: function(event) {
                console.log(event.elements.search.value);
                
            }
        })
     });