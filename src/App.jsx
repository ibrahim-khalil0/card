import Card from "./Card/Card"

function App() {

  const cardDetails = [
    {
      title: 'Renault Clio 5 Manuel',
      subTitle: 'Renault Clio 5 Manuel or Similar',
      mad: '220',
      seats: 4,
      bags: 2,
      door: 4,
      ac: 'A/C',
      cylinder: 'Diesel',
      system: 'manual',
      image: 'https://i.ibb.co/ckRwwtn/car2.png'
    },
    {
      title: 'Renault Clio 5 Manuel',
      subTitle: 'Renault Clio 5 Manuel or Similar',
      mad: '220',
      seats: 4,
      bags: 2,
      door: 4,
      ac: 'A/C',
      cylinder: 'Diesel',
      system: 'manual',
      image: 'https://i.ibb.co/ZBvYJNz/car3.png'
    },
    {
      title: 'Renault Clio 5 Manuel',
      subTitle: 'Renault Clio 5 Manuel or Similar',
      mad: '220',
      seats: 4,
      bags: 2,
      door: 4,
      ac: 'A/C',
      cylinder: 'Diesel',
      system: 'manual',
      image: 'https://i.ibb.co/TqZ3j1W/car.png'
    }
  ]

  return (
    <>
      <div className="p-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 xl:gap-10 bg-gray-100">
        {
          cardDetails.map((card, idx) => <Card key={idx} card={card}></Card>)
        }
      </div>
    </>
  )
}

export default App
