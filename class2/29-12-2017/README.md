# Todos App v1.0

## UI
```
[INPUT: String (listName)] [Add+]

[- NewList] [ ]
  [INPUT: String (itemName)] [Add+]
<remove>

[- Supermercado] [X]
  [INPUT: String (itemName)] [Add+]
  - [x] Comprar carne <remove>
  - [X] Comprar queso <remove>
  - [x] Comprar agua <remove>
<remove>

[- Migration] [ ]
  [INPUT: String (itemName)] [Add+]
  - [X] Crear reducers <remove>
  - [X] Crear actions <remove>
  - [] Crear Sagas <remove>
  - [] Crear Components <remove>
<remove>  
  ```

## actions
- AddNewTodosList (string: name)
- RemoveTodosList (integer: listId)
- ToggleTodosList (integer: listId)
- EditName (integer: listId, name)

- AddItem (string: name)
- ToggleItem (integer: listId, integer: itemId)
- RemoveItem (integer: listId, integer: itemId)
- EditItemName (integer: listId, integer: itemId, string: name)
