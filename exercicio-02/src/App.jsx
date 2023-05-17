import Card from "./components/Card"
import "./global.css"

function App() {
  
  return (
    <section className="container-cards">
      <Card 
      img="https://i.pinimg.com/originals/ba/94/64/ba9464145eba8762f6286a3c8387c951.jpg"
      alt="img-starwars"
      title="Pôster: Star Wars (1977)"
      description="Um péster decorativo épico do filme Star Wars, com moldura de MDF e
      tamanho A3, Uma étima recordaco de um dos mais icdnicos filmes de
      todos os tempos. Este classico péster trard aventura, nostalgia e a magia
      de Star Wars para qualquer lugar que voc® decidir pendurar. Nao perca
      ‘a chance de adicionar essa linda meméria ao seu acervo!"
      > </Card>
    </section>
  )
}

export default App
