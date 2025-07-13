export function Todo({ todos }) {
  return (
    <div style={styles.container}>
      {todos.map((todo, index) => (
        <div key={index} style={styles.card}>
          <h2 style={styles.title}>{todo.title}</h2>
          <p style={styles.description}>{todo.description}</p>
          <button style={todo.completed ? styles.doneBtn : styles.todoBtn}>
            {todo.completed ? "✅ Completed" : "🕒 Mark as Completed"}
          </button>
        </div>
      ))}
    </div>
  );
}

const styles = {
  container: {
    display: "flex",
    flexWrap: "wrap",
    gap: "20px",
    justifyContent: "center",
    marginTop: "30px",
  },
  card: {
    backgroundColor: "#f9f9f9",
    padding: "20px",
    borderRadius: "10px",
    boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
    width: "250px",
    textAlign: "center",
    transition: "transform 0.2s",
  },
  title: {
    fontSize: "20px",
    margin: "0 0 10px",
    color: "#333",
  },
  description: {
    fontSize: "16px",
    margin: "0 0 15px",
    color: "#666",
  },
  todoBtn: {
    padding: "10px 15px",
    backgroundColor: "#007bff",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
  doneBtn: {
    padding: "10px 15px",
    backgroundColor: "#28a745",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    cursor: "not-allowed",
  },
};
