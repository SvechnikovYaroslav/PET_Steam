import { useState } from "react";
import ExpenseList from "./expense-tracker/components/ExpenseList";
import ExpenseFilter from "./expense-tracker/components/ExpenseFilter";
import ExpenseForm from "./expense-tracker/components/ExpenseForm";
import categories from "./expense-tracker/categories";

function App() {
  const [selecteCategory, setSelectedCategory] = useState("");
  const [expenses, setExpenses] = useState([
    {
      id: 1,
      description: "Bee the Killer of Cats",
      amount: 5,
      category: "Entertainment",
    },
    { id: 2, description: "dog food", amount: 4, category: "Groceries" },
    {
      id: 3,
      description: "Mickey Mouse",
      amount: 3,
      category: "Entertainment",
    },
    { id: 4, description: "cat food", amount: 2, category: "Groceries" },
    { id: 5, description: "domestic bees", amount: 1, category: "Utilities" },
    { id: 6, description: "Dove", amount: 6, category: "Entertainment" },
  ]);

  const visibleExpenses = selecteCategory
    ? expenses.filter((e) => e.category === selecteCategory)
    : expenses;

  return (
    <div>
      <div className="mb-3">
        <ExpenseForm />
      </div>
      <div className="mb-3">
        <ExpenseFilter
          onSelectCategory={(category) => setSelectedCategory(category)}
        />
      </div>
      <ExpenseList
        expenses={visibleExpenses}
        onDelete={(id) => setExpenses(expenses.filter((e) => e.id !== id))}
      />
    </div>
  );
}
export default App;
