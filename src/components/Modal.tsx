import ReactDom from 'react-dom';

interface ModalProps {
	setShow: (show: boolean) => void;
	children: React.ReactNode;
}

const modalRoot = document.getElementById('modal') as HTMLElement;

const Modal = ({ setShow, children }: ModalProps) => {
	const closeModal = (e: any) => {
		const outsideModal = document.querySelector('.ModalContainer');
		const exitModal = document.querySelector('.ModalClose');
		if (e.target === outsideModal || e.target === exitModal) setShow(false);
	};

	return ReactDom.createPortal(
		<div
			className="ModalContainer"
			onClick={(e: any) => {
				closeModal(e);
			}}
			aria-modal="true"
			// tabIndex="-1"
		>
			<div>
				<p
					className="ModalClose"
					onClick={(e) => {
						closeModal(e);
					}}>
					&#x2715;
				</p>
				{children}
			</div>
		</div>,
		modalRoot
	);
};

export default Modal;
