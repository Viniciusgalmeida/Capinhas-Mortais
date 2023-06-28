import './Plan.css'

const plans = [
    {
        name: 'The Wizard',
        price: 'R$8,99/mês',
        benefits1: '8 Capas',
        benefits2: 'Designs limitados',
        benefits3: 'Estilos básicos',
        benefits4: 'Materiais padronizados',
    },
    {
        name: 'The Sorcerer',
        price: 'R$14,90/mês',
        benefits1: '20 Capas',
        benefits2: 'Designs premiuns',
        benefits3: 'Estilos diferenciados',
        benefits4: 'Materiais de alta qualidade',
    },
    {
        name: 'The Archmage',
        price: 'R$25,99/mês',
        benefits1: 'Capinhas ilimitadas',
        benefits2: 'Designs exclusivos',
        benefits3: 'Estilos de vanguarda',
        benefits4: 'Materiais luxuosos',
    },
]

const positiveSignal = (<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16">
<path d="M 14.531 5.031 L 6.531 13.031 C 6.39 13.172 6.199 13.251 5.999 13.251 C 5.8 13.251 5.609 13.172 5.468 13.031 L 1.968 9.531 C 1.675 9.237 1.675 8.762 1.968 8.468 C 2.262 8.175 2.737 8.175 3.031 8.468 L 6 11.437 L 13.469 3.969 C 13.763 3.676 14.238 3.676 14.532 3.969 C 14.825 4.263 14.825 4.738 14.532 5.032 Z" fill="#FF9B54"></path>
</svg>)

function Plans() {
  return (
    <div className="card-container">
        <ul className='card-list'>
            {plans.map((plan, index) => (
                <li className='card-list-plan' key={index}>
                    <p className='card-list-name'>{plan.name}</p>
                    <p className='card-list-price'>{plan.price}</p>
                    
                    <p className='card-list-name'>{positiveSignal}    {plan.benefits1}</p>
                    <p className='card-list-name'>{positiveSignal}    {plan.benefits2}</p>
                    <p className='card-list-name'>{positiveSignal}    {plan.benefits3}</p>
                    <p className='card-list-name'>{positiveSignal}    {plan.benefits4}</p>
                    <button className='card-list-button'>Quero este Plano</button>
                </li>
            ))}
        </ul>

    </div>
  )  
}

export default Plans;
