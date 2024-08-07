import './App.css'

const users = [
  {
    id: 1,
    name: 'Carlos',
    address: 'Rua X',
    age: 28,
    isAdmin: false,
  },
  {
    id: 2,
    name: 'Maria',
    address: 'Rua XX',
    age: 31,
    isAdmin: true,
  },
  {
    id: 3,
    name: 'Matheus',
    address: 'Rua XI',
    age: 22,
    isAdmin: false,
  },
]

function App() {

  return (
    <>

      <div>

        {users.map((post, index) => (
          <Card icon={post.icon} title={post.title}>
            {post.name}, {post.age}
          </Card>
        ))}

      </div>
    </>
  )
}

export default App
