import React, { useEffect } from 'react';
import styles from './file-input.module.css';
import UploadIcon from '@material-ui/icons/Backup';

export interface FileInputStructure {
	type: 'file';
	name: string;
	label?: string;
	helpText?: string;
	required?: boolean;
	fileTypes?: string[];
}

interface FileInputProps {
	fieldStructure: FileInputStructure;
	value?: string | File | null;
	error?: string;
	handleChange: (name: string, value: File | string | null) => void;
}

export const FileInput: React.FC<FileInputProps> = ({ fieldStructure, value, error, handleChange }) => {
	const previewFile = (image?: string | File | null) => {
		const reader = new FileReader()
		const imagePreview = document.querySelector(`#${fieldStructure.name}-preview`)! as HTMLImageElement

		reader.onload = e => {
			imagePreview.src = typeof e.target?.result === 'string' ? e.target?.result : ''
		}

		const filePreviews = {
			audio: 'https://baldwindesign.co/images/audio-preview.png',
			file: 'https://baldwindesign.co/images/file-preview.png'
		}

		if (image && typeof image !== 'string') {
			if (image.type.includes('image')) {
				reader.readAsDataURL(image)
			} else if (image.type.includes('audio')) {
				imagePreview.src = filePreviews.audio
			} else {
				imagePreview.src = filePreviews.file
			}
		}
		if (typeof image === 'string') imagePreview.src = image
	}

	useEffect(() => previewFile(value), [])

	return (
		<div>
			<input
				id={fieldStructure.name + '-input'}
				type="file"
				accept={fieldStructure.fileTypes ? fieldStructure.fileTypes.join() : undefined}
				onChange={e => {
					handleChange(fieldStructure.name, e.target.files ? e.target.files[0] : null)
					previewFile(e.target.files ? e.target.files[0] : null)
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
