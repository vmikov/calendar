import React, { Component, createRef } from 'react';
import { connect } from 'react-redux';
import { isOpen, getDate, getData } from '../../store/dataEditor/selectors';
import { closeEditor } from '../../store/dataEditor/actions';
import { setCalendarData } from '../../store/data/actions';
import s from './DataEditor.module.css';
import bs from '../buttons/Button.module.css';

class DataEditor extends Component {
  state = {
    data: null
  };

  backdropRef = createRef();

  componentDidMount() {
    window.addEventListener('click', this.onWindowClick);
    window.addEventListener('keydown', this.onWindowKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener('click', this.onWindowClick);
    window.removeEventListener('keydown', this.onWindowKeyDown);
  }

  closeModal = () => {
    const { onClose } = this.props;
    onClose();
  };

  onWindowClick = e => {
    if (this.backdropRef.current === e.target) {
      this.closeModal();
    }
  };

  onWindowKeyDown = e => {
    if (e.key === 'Escape') {
      this.closeModal();
    }
  };

  handleInput = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = e => {
    const { onSave, date } = this.props;
    const { data } = this.state;

    e.preventDefault();
    onSave(date, data);
  };

  render() {
    const { isOpen, date, data } = this.props;

    return (
      isOpen && (
        <div className={s.backdrop} ref={this.backdropRef}>
          <div className={s.modal}>
            <div className={s.header}>
              <div className={s.title}>{date.toLocaleDateString()}</div>
              <button
                className={s.closeButton}
                type='button'
                onClick={this.closeModal}
              >
                &times;
              </button>
            </div>
            <form className={s.form} onSubmit={this.onSubmit}>
              <label className={s.label} htmlFor='data'>
                Заметки:
              </label>
              <textarea
                className={s.textarea}
                name='data'
                id='data'
                cols='30'
                rows='15'
                onChange={this.handleInput}
              >
                {data}
              </textarea>
              <div className={s.buttons}>
                <button
                  type='submit'
                  className={[bs.standard, s.controlButton].join(' ')}
                >
                  Сохранить
                </button>
                <button
                  type='button'
                  className={[bs.standard, s.controlButton].join(' ')}
                  onClick={this.closeModal}
                >
                  Отмена
                </button>
              </div>
            </form>
          </div>
        </div>
      )
    );
  }
}

const mSTP = state => ({
  isOpen: isOpen(state),
  date: getDate(state),
  data: getData(state)
});

const mDTP = { onClose: closeEditor, onSave: setCalendarData };

export default connect(
  mSTP,
  mDTP
)(DataEditor);
