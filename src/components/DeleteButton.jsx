export default function DeleteButton({ hasData, onDelete, index }) {
  if (!hasData) return null;
  return (
    <button onClick={() => onDelete(index)} className="delete-btn">
      Delete
    </button>
  );
}
