import Image from "next/image";

export function Header(){
    return (
    <header className="bg-header w-full h-[212px]">
        <div className="mx-auto max-w-[1120px] flex justify-between pt-8">
            <Image className="max-h-10"  src="/images/logo.png" alt="Logo" width={172} height={40} />
            <button className="bg-button text-white size-4 w-[197px] px-5 py-6 rounded-md text-center flex items-center justify-center hover:opacity-80"> Nova Transação </button>
        </div>
        <div className="barra">
            <div className="valor" title="Entradas">
                <h1>Entradas
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M16 2.66666C8.63621 2.66666 2.66668 8.6362 2.66668 16C2.66668 23.3638 8.63622 29.3333 16 29.3333C23.3638 29.3333 29.3333 23.3638 29.3333 16C29.3333 8.6362 23.3638 2.66666 16 2.66666Z" stroke="#33CC95" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M21.3333 16L16 10.6667L10.6667 16" stroke="#33CC95" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M16 21.3333L16 10.6667" stroke="#33CC95" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                </h1>
                <p></p>
                <h2>R$ 17.400,00</h2>
            </div>
            
            <div className="valor" title="Saídas">
                <h1>Saídas
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16 29.3333C23.3638 29.3333 29.3333 23.3638 29.3333 16C29.3333 8.63621 23.3638 2.66668 16 2.66667C8.63622 2.66667 2.66669 8.63621 2.66668 16C2.66668 23.3638 8.63622 29.3333 16 29.3333Z" stroke="#E62E4D" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M10.6667 16L16 21.3333L21.3334 16" stroke="#E62E4D" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M16 10.6667L16 21.3333" stroke="#E62E4D" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                </h1>
                <h2>R$ 1.259,00</h2>
            </div>

            <div className="total" title="Total">
                <div>
                <h1>Total
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16 1.33333V30.6667" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M22.6667 6.66667H12.6667C11.429 6.66667 10.242 7.15834 9.36684 8.03351C8.49167 8.90868 8 10.0957 8 11.3333C8 12.571 8.49167 13.758 9.36684 14.6332C10.242 15.5083 11.429 16 12.6667 16H19.3333C20.571 16 21.758 16.4917 22.6332 17.3668C23.5083 18.242 24 19.429 24 20.6667C24 21.9043 23.5083 23.0913 22.6332 23.9665C21.758 24.8417 20.571 25.3333 19.3333 25.3333H8" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                </h1>
                </div>

                <div>
                    <h2>R$ 16.141,00</h2>
                </div>
            </div>
            
        </div>
        <div className="descricao">
            <h1>Título</h1>
            <h1>Preço</h1>
            <h1>Categoria</h1>
            <h1>Data</h1>
        </div>
        
    </header> )
}