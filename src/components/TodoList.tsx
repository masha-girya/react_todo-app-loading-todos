import React from 'react';
import { Todo } from '../types/Todo';
import { TodoComponent } from './TodoComponent';

interface Props {
  todos: Todo[],
}

export const TodoList: React.FC<Props> = React.memo(({ todos }) => (
  <section className="todoapp__main" data-cy="TodoList">
    {todos.map(todo => (
      <TodoComponent
        todo={todo}
        key={todo.id}
      />
    ))}
  </section>
));