import { createSelector } from 'reselect'
import { IState, TaskStatus } from '../../common/types'

export const getTasks = (state: IState) => state.tasks
export const getActiveId = (state: IState) => state.globals.activeId

export const getActiveTask = createSelector(
  getTasks,
  getActiveId,
  (tasks, id) => tasks.find((task) => task.id === id),
)

export const getUnsavedTaskCount = createSelector(
  getTasks,
  (tasks) => tasks.filter((task) => (
    task.status === TaskStatus.DONE && !task.saved
  )).length,
)
