import { useState } from "react"

export default function App() {
  const [author, setAuthor] = useState("");
  const [content, setContent] = useState("");
  const [comments, setComments] = useState([]);

  const handleSubmit = (ev) => {
    ev.preventDefault();
    
    const newComment = {
      id: Math.floor(Math.random() * 1000000),
      author,
      content,
      createdAt: new Date()
    }

    setComments((state) => [newComment, ...state])
    setAuthor("");
    setContent("");
  }

  return (
    <div id="app">
      <h2>Seção de comentarios</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="author">Email</label>
        <input 
          type="email" 
          name="author"
          required 
          value={author}
          onChange={(e) => setAuthor(e.target.value)}/>
        <label htmlFor="content">Comentários</label>
        <textarea 
          name="content" 
          cols="30" 
          rows="6" 
          required
          value={content}
          onChange={(e) => setContent(e.target.value)}>
        </textarea>
        <button type="submit">Enviar comentario</button>
      </form>
      <hr />
      <section id="coments">
        {comments.length > 0
        ? (
          comments.map((comment) => (
            <div key={comment.id}>
              <h3>{comment.author}</h3>
              <span>Em {comment.createdAt.toLocaleString()}</span>
              <p>{comment.content}</p>
            </div>
          ))
        ) : (
          <p>Seja o primeiro a comentar</p>
        )}
        
      </section>
    </div>
  )
}