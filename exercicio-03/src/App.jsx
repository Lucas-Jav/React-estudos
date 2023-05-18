import Card from "./components/Card"
import "../styles/global.css"

function App() {

  return (
    <section className="container-all">
      <Card 
      alt="img-person" 
      description="Dev front end"
      email="lucas@lucas.com"
      name="lucas O'"
      number="349912921"
      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSw47Qd4IQZEAkUjskgB1pF_3LaVKOvuvLcs6GXleRyuSpae8F2Y_m9L4rUQhU-mDcXMCQ&usqp=CAU"
      gitLink="/git/bla"
      linkedinLink="linkedin/link"
      twtLink="odeiotwt"
      ></Card>
      </section>
  )
}

export default App
