import styles from './FormModal.module.css';

const FormModal = ({
  defaultText,
  priority,
  taskText,
  onSetTask,
  onPostFormTask,
  onChangeStatus,
  onCloseModal,
  textButton,
}) => {
  return (
    <form onSubmit={onPostFormTask}>
      <div className={styles.addEditModal}>
        <div className={styles.flxBetween}>
          <span className={styles.modalTitle}> Your task </span>
          <svg
            width="17"
            height="16"
            viewBox="0 0 17 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={styles.cp}
            onClick={onCloseModal}
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M16.0456 0.716817C15.603 0.302896 14.9103 0.302151 14.4668 0.715119L8.49994 6.27064L2.53309 0.715122C2.08954 0.302153 1.39691 0.302898 0.954273 0.716819L0.898833 0.768663C0.41891 1.21745 0.419741 1.97264 0.900651 2.4204L6.76795 7.88323L0.900653 13.3461C0.419743 13.7938 0.418912 14.549 0.898835 14.9978L0.954275 15.0496C1.39691 15.4636 2.08955 15.4643 2.53309 15.0513L8.49994 9.49582L14.4668 15.0513C14.9103 15.4643 15.603 15.4636 16.0456 15.0496L16.101 14.9978C16.581 14.549 16.5801 13.7938 16.0992 13.3461L10.2319 7.88323L16.0992 2.4204C16.5801 1.97264 16.581 1.21745 16.101 0.768661L16.0456 0.716817Z"
              fill="#0A1629"
            ></path>
          </svg>
        </div>
        <div className={styles.input}>
          <label htmlFor="title">Task</label>
          <input
            type="text"
            placeholder={defaultText}
            name="title"
            value={taskText}
            onChange={onSetTask}
          ></input>
        </div>
        <div className={styles.modalPriority}>
          <span>Priority</span>
          <ul className={styles.priorityButtons}>
            <li
              className={`${priority === 3 && styles.highSelected} ${
                styles.high
              }`}
              onClick={(event) => onChangeStatus(event)}
            >
              high
            </li>
            <li
              className={`${priority === 2 && styles.mediumSelected} ${
                styles.medium
              }`}
              onClick={(event) => onChangeStatus(event)}
            >
              medium
            </li>
            <li
              className={`${priority === 1 && styles.lowSelected} ${
                styles.low
              }`}
              onClick={(event) => onChangeStatus(event)}
            >
              low
            </li>
          </ul>
        </div>
        <div className={styles.flxRight}>
          <button
            type="submit"
            className={styles.button}
            disabled={taskText.trim().length <= 0}
          >
            {textButton}
          </button>
        </div>
      </div>
    </form>
  );
};

export default FormModal;
