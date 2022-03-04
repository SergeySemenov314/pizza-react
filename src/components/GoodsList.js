import Good from "./Good";

const GoodsList = () => {

    const goodsArr = [

        {
            img: 'https://dodopizza-a.akamaihd.net/static/Img/Products/Pizza/ru-RU/b750f576-4a83-48e6-a283-5a8efb68c35d.jpg',
            title: 'Чизбургер-пицца',
            doughThickness: ['тонкое', 'традиционное'],
            sizes: [26, 30, 40],
            price: 395,
        },
        {
            img: 'https://dodopizza-a.akamaihd.net/static/Img/Products/01735d5a70154bd3884899030a671629_292x292.jpeg',
            title: 'Сырный цыпленок',
            doughThickness: ['тонкое', 'традиционное'],
            sizes: [26, 30, 40],
            price: 290,
        },
        {
            img: 'https://dodopizza-a.akamaihd.net/static/Img/Products/aa845b6e841241fbbff1a770b3ad3103_292x292.jpeg',
            title: 'Ветчина и грибы',
            doughThickness: ['тонкое', 'традиционное'],
            sizes: [26, 30, 40],
            price: 450,
        },
        {
            img: 'https://dodopizza-a.akamaihd.net/static/Img/Products/2ac448e39ba24623a33c1d8d50b69ef8_292x292.jpeg',
            title: 'Диабло',
            doughThickness: ['тонкое', 'традиционное'],
            sizes: [26, 30, 40],
            price: 385,
        },
        {
            img: 'https://dodopizza-a.akamaihd.net/static/Img/Products/Pizza/ru-RU/b750f576-4a83-48e6-a283-5a8efb68c35d.jpg',
            title: 'Чизбургер-пицца',
            doughThickness: ['тонкое', 'традиционное'],
            sizes: [26, 30, 40],
            price: 395,
        },
        {
            img: 'https://dodopizza-a.akamaihd.net/static/Img/Products/01735d5a70154bd3884899030a671629_292x292.jpeg',
            title: 'Сырный цыпленок',
            doughThickness: ['тонкое', 'традиционное'],
            sizes: [26, 30, 40],
            price: 290,
        },
        {
            img: 'https://dodopizza-a.akamaihd.net/static/Img/Products/aa845b6e841241fbbff1a770b3ad3103_292x292.jpeg',
            title: 'Ветчина и грибы',
            doughThickness: ['тонкое', 'традиционное'],
            sizes: [26, 30, 40],
            price: 450,
        },
        {
            img: 'https://dodopizza-a.akamaihd.net/static/Img/Products/2ac448e39ba24623a33c1d8d50b69ef8_292x292.jpeg',
            title: 'Диабло',
            doughThickness: ['тонкое', 'традиционное'],
            sizes: [26, 30, 40],
            price: 385,
        },
        {
            img: 'https://dodopizza-a.akamaihd.net/static/Img/Products/Pizza/ru-RU/b750f576-4a83-48e6-a283-5a8efb68c35d.jpg',
            title: 'Чизбургер-пицца',
            doughThickness: ['тонкое', 'традиционное'],
            sizes: [26, 30, 40],
            price: 395,
        },
        {
            img: 'https://dodopizza-a.akamaihd.net/static/Img/Products/01735d5a70154bd3884899030a671629_292x292.jpeg',
            title: 'Сырный цыпленок',
            doughThickness: ['тонкое', 'традиционное'],
            sizes: [26, 30, 40],
            price: 290,
        },
        {
            img: 'https://dodopizza-a.akamaihd.net/static/Img/Products/aa845b6e841241fbbff1a770b3ad3103_292x292.jpeg',
            title: 'Ветчина и грибы',
            doughThickness: ['тонкое', 'традиционное'],
            sizes: [26, 30, 40],
            price: 450,
        },
        {
            img: 'https://dodopizza-a.akamaihd.net/static/Img/Products/2ac448e39ba24623a33c1d8d50b69ef8_292x292.jpeg',
            title: 'Диабло',
            doughThickness: ['тонкое', 'традиционное'],
            sizes: [26, 30, 40],
            price: 385,
        },
        
    ]

    let addToCart = (goodObj) => {
        localStorage.cartGoods = JSON.stringify(goodObj);

    }



    return (
        <>
            <h2 className="content__title">Все пиццы</h2>
            <div className="content__items">
                {goodsArr.map(good =>
                    <Good 
                        addToCart = {addToCart} 
                        img = {good.img}
                        title = {good.title}
                        doughThickness = {good.doughThickness}
                        sizes = {good.sizes}
                        price = {good.price}
                    />
                    
                )}
            </div>
        </>
    );
  }
  
  export default GoodsList;
  