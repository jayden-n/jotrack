interface FormRowProps {
	type: string;
	name: string;
	labelText?: string;
	defaultValue: string;
}

const FormRow: React.FC<FormRowProps> = ({
	type,
	name,
	labelText,
	defaultValue,
}) => {
	return (
		<div>
			<label htmlFor={name} className="block mb-2 capitalize leading-6">
				{/* to avoid camel case text value */}
				{labelText || name}
			</label>
			<input
				type={type}
				id={name}
				name={name}
				className="w-full py-1 px-3 rounded-md border border-[1] text-gray h-[45px]"
				defaultValue={defaultValue || ''}
				required
			/>
		</div>
	);
};
export default FormRow;
