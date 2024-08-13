
function App() {
  return (
    <>
    <Router>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
  </Router>
    </>
  );
}

export default App;
