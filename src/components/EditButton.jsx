export default function EditButton({ isEditing, onToggle, hasData, index }) {
  if (!hasData) return null;

  return (
    <button onClick={() => onToggle(index)} className="edit-btn">
      {isEditing ? "Save" : "Edit"}
    </button>
  );
}
