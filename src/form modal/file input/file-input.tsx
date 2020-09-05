import React, { useEffect } from 'react';
import styles from './file-input.module.css';
import UploadIcon from '@material-ui/icons/Backup';

export interface FileInputStructure {
	type: 'file';
	name: string;
	label?: string;
	helpText?: string;
	required?: boolean;
}

interface FileInputProps {
	fieldStructure: FileInputStructure;
	value?: string | File | null;
	error?: string;
	handleChange: (name: string, value: File | string | null) => void;
}

export const FileInput: React.FC<FileInputProps> = ({ fieldStructure, value, error, handleChange }) => {
	const previewImage = (image?: string | File | null) => {
		const reader = new FileReader()
		const imagePreview = document.querySelector(`#${fieldStructure.name}-preview`)! as HTMLImageElement

		reader.onload = e => {
			imagePreview.src = typeof e.target?.result === 'string' ? e.target?.result : ''
		}

		if (image && typeof image !== 'string') reader.readAsDataURL(image)
		if (typeof image === 'string') imagePreview.src = image
	}

	useEffect(() => previewImage(value), [])

	return (
		<div>
			<input
				id={fieldStructure.name + '-input'}
				type="file"
				onChange={e => {
					handleChange(fieldStructure.name, e.target.files ? e.target.files[0] : null)
					previewImage(e.target.files ? e.target.files[0] : null)
				}}
				style={{ display: 'none' }}
				onFocus={() => console.log('focus')}
			/>
			<label htmlFor={fieldStructure.name + '-input'}>
				<div className={styles.file_upload} style={error ? { borderColor: '#f44336' } : {}}>
					<div className={`${styles.upload_overlay} MuiFormLabel-root ${error ? 'Mui-error' : null}`}>
						<UploadIcon />
						<label>{fieldStructure.name}</label>
					</div>
					<img id={`${fieldStructure.name}-preview`} className={styles.image_preview} src={typeof value === 'string' ? value : undefined} />
				</div>
			</label>
			{fieldStructure.helpText || error ? (
				<p className={`MuiFormHelperText-root MuiFormHelperText-contained ${error ? 'Mui-error' : null} MuiFormHelperText-marginDense`}>{error || fieldStructure.helpText}</p>
			) : null}
		</div>
	);
}
