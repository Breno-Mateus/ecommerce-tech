import Promo from "../../assets/promo.png";

const CardPromo = () => {
    return (
        <div className="hidden md:flex justify-center p-12 bg-colorGray">
            <div className="mt-24">
                <h3 className="text-sm xl:text-2xl font-bold">Xiaomi Mi Notebook Air 12.5</h3>
                <ul className="list-disc list-inside text-sm">
                    <li>Intel Core m3-7Y30</li>
                    <li>4GB LPDDR3 1866MHz</li>
                    <li>128GB SSD (pode expandir SSD)</li>
                    <li>12.5 polegada</li>
                </ul>
            </div>

            <img src={Promo} className="h-[35rem] w-[35rem]"/>

            <div className="mt-24 flex flex-col text-sm gap-2">
                <p className="line-through">R$ 4.275,99</p>
                <h1 className="font-bold">R$ 3.000</h1>
                <div className="flex gap-2 items-center">
                    <p>ou</p>
                    <h1 className="font-bold">12x</h1>
                    <p>R$</p>
                    <p>250,00</p>
                </div>
                <button className="bg-colorPrimary rounded-md text-colorSecondary p-2 hover:bg-opacity-90">Comprar</button>
            </div>
        </div>
    )
};

export default CardPromo;