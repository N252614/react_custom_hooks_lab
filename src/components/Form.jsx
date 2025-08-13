import { useLocalStorage } from "../hooks/useLocalStorage";

function Form() {
  // Store name and serviceNumber in localStorage
  const [name, setName] = useLocalStorage("name", "");
  const [serviceNumber, setServiceNumber] = useLocalStorage("serviceNumber", "");

  // Update name state when user types
  const handleNameChange = (e) => setName(e.target.value);

  // Update serviceNumber state when user types
  const handleServiceChange = (e) => setServiceNumber(e.target.value);

  return (
    <form style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
      {/* Name input */}
      <label htmlFor="name">Name:</label>
      <input
        id="name"
        type="text"
        value={name}
        onChange={handleNameChange}
        data-testid="name"
        placeholder="Enter your name"
      />

      {/* Service number input */}
      <label htmlFor="service">Service Number:</label>
      <input
        id="service"
        type="text"
        value={serviceNumber}
        onChange={handleServiceChange}
        data-testid="service"
        placeholder="Enter service number"
      />

      {/* Display greeting if name is entered */}
      <h4 data-testid="name-header">
        {name ? `Welcome, ${name}` : "Enter your name"}
      </h4>
    </form>
  );
}

export default Form;