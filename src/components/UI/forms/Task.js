import styles from './Task.module.css';

import { Link } from 'react-router-dom';

const Task = ({ task, onChangeStatus, onShowEditView, onShowDeleteView }) => {
  const priorityText = {
    1: 'Low',
    2: 'Medium',
    3: 'High',
  };

  const priorityColor = {
    1: 'colorLow',
    2: 'colorMedium',
    3: 'colorHigh',
  };

  const statusText = {
    1: 'Done',
    2: 'In process',
    3: 'To do',
  };

  const statusProgress = {
    1: 69.115,
    2: 34.5575,
    3: 0,
  };
  return (
    <div className={styles.taskCard}>
      <div className={styles.taskName}>
        <span className={styles.taskTitle}>Task</span>
        <span className={styles.task}>{task.name}</span>
      </div>
      <div className={styles.taskPriority}>
        <span className={styles.priorityTitle}>Priority</span>
        <span
          className={`${styles.priority} ${
            styles[priorityColor[task.priority]]
          }`}
        >
          {priorityText[task.priority]}
        </span>
      </div>
      <div className={styles.taskStatus}>
        <button
          className={styles.status}
          onClick={() => onChangeStatus(task.id)}
        >
          {statusText[task.status]}
        </button>
      </div>
      <div className={styles.taskProgress}>
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          className={styles.circularProgressbar}
        >
          <circle
            className={styles.circleBackground}
            cx="12"
            cy="12"
            r="11"
            strokeWidth="2px"
          ></circle>
          <circle
            className={styles.circleProgress}
            cx="12"
            cy="12"
            r="11"
            strokeWidth="2px"
            transform="rotate(-90 12 12)"
            style={{
              strokeDasharray: `${statusProgress[task.status]}`,
              strokeDashoffset: `${statusProgress[task.status]}`,
            }}
          ></circle>
        </svg>
      </div>
      <div className={styles.taskActions}>
        <svg
          width="22"
          height="22"
          viewBox="0 0 22 22"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={styles.ActionEdit}
          onClick={() => onShowEditView(task.id)}
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M14.8787 0.87868L6.29289 9.46447C6.10536 9.652 6 9.90636 6 10.1716V14.1716C6 14.7239 6.44772 15.1716 7 15.1716H11C11.2652 15.1716 11.5196 15.0662 11.7071 14.8787L20.2929 6.29289C21.4645 5.12132 21.4645 3.22183 20.2929 2.05025L19.1213 0.87868C17.9497 -0.292893 16.0503 -0.292893 14.8787 0.87868ZM18.8787 3.46447L18.9619 3.55867C19.2669 3.95096 19.2392 4.5182 18.8787 4.87868L10.584 13.1716H8V10.5856L16.2929 2.29289C16.6834 1.90237 17.3166 1.90237 17.7071 2.29289L18.8787 3.46447ZM10.0308 2.17157C10.0308 1.61929 9.5831 1.17157 9.03081 1.17157H5L4.78311 1.17619C2.12231 1.28975 0 3.48282 0 6.17157V16.1716L0.00461951 16.3885C0.118182 19.0493 2.31125 21.1716 5 21.1716H15L15.2169 21.167C17.8777 21.0534 20 18.8603 20 16.1716V11.2533L19.9933 11.1366C19.9355 10.6393 19.5128 10.2533 19 10.2533C18.4477 10.2533 18 10.701 18 11.2533V16.1716L17.9949 16.3478C17.9037 17.9227 16.5977 19.1716 15 19.1716H5L4.82373 19.1665C3.24892 19.0752 2 17.7693 2 16.1716V6.17157L2.00509 5.9953C2.09634 4.42049 3.40232 3.17157 5 3.17157H9.03081L9.14743 3.16485C9.64477 3.10708 10.0308 2.68441 10.0308 2.17157Z"
            fill="#0A1629"
          ></path>
        </svg>
        <svg
          width="20"
          height="22"
          viewBox="0 0 20 22"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={styles.ActionDelete}
          onClick={() => onShowDeleteView(task.id)}
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M12 0C13.5977 0 14.9037 1.24892 14.9949 2.82373L15 3V4H17H19C19.5523 4 20 4.44772 20 5C20 5.51284 19.614 5.93551 19.1166 5.99327L19 6H18V19C18 20.5977 16.7511 21.9037 15.1763 21.9949L15 22H5C3.40232 22 2.09634 20.7511 2.00509 19.1763L2 19V6H1C0.447715 6 0 5.55228 0 5C0 4.48716 0.38604 4.06449 0.883379 4.00673L1 4H3H5V3C5 1.40232 6.24892 0.0963391 7.82373 0.00509269L8 0H12ZM4 6V19C4 19.5128 4.38604 19.9355 4.88338 19.9933L5 20H15C15.5128 20 15.9355 19.614 15.9933 19.1166L16 19V6H14H6H4ZM13 4H7V3L7.00673 2.88338C7.06449 2.38604 7.48716 2 8 2H12L12.1166 2.00673C12.614 2.06449 13 2.48716 13 3V4ZM8 9C8.51284 9 8.93551 9.38604 8.99327 9.88338L9 10V16C9 16.5523 8.55229 17 8 17C7.48716 17 7.06449 16.614 7.00673 16.1166L7 16V10C7 9.44771 7.44772 9 8 9ZM12.9933 9.88338C12.9355 9.38604 12.5128 9 12 9C11.4477 9 11 9.44771 11 10V16L11.0067 16.1166C11.0645 16.614 11.4872 17 12 17C12.5523 17 13 16.5523 13 16V10L12.9933 9.88338Z"
            fill="#F65160"
          ></path>
        </svg>
        <Link to={`${task.id}`}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="22"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#000000"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={styles.ActionNotes}
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M14 2H6a2 2 0 0 0-2 2v16c0 1.1.9 2 2 2h12a2 2 0 0 0 2-2V8l-6-6z"
              fill="#4169e1"
            />

            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M14 3v5h5M16 13H8M16 17H8M10 9H8"
              fill="#4169e1"
            />
          </svg>
        </Link>
      </div>
    </div>
  );
};

export default Task;
