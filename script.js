const view_more_product = document.getElementById('view_more_product');
const view_more = document.getElementById('view-more');
view_more_product.style.display='none';
const handlemodel = () =>{
    view_more_product.style.display='block';
    view_more.style.display='none';
    view_more.scrollIntoView();
}
    