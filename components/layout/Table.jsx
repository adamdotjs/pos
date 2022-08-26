const Table = ({ data }) => {
	return (
		<table className="w-full table-auto border-collapse">
			<thead>
				<tr className="text-left">
					<th className="border border-slate-700 py-1 px-2">Number</th>
					<th className="border border-slate-700 py-1 px-2">Customer</th>
					<th className="hidden border border-slate-700 py-1 px-2 xl:table-cell">Sales</th>
					<th className="hidden border border-slate-700 py-1 px-2 xl:table-cell">CSR</th>
					<th className="hidden border border-slate-700 py-1 px-2 xl:table-cell">Description</th>
					<th className="hidden border border-slate-700 py-1 px-2 lg:table-cell">Price</th>
					<th className="border border-slate-700 py-1 px-2">Actions</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<td className="border border-slate-700 py-1 px-2">138493</td>
					<td className="border border-slate-700 py-1 px-2">Pioneer Valley Books</td>
					<td className="hidden border border-slate-700 py-1 px-2 xl:table-cell">Reza</td>
					<td className="hidden border border-slate-700 py-1 px-2 xl:table-cell">Celeste</td>
					<td className="hidden border border-slate-700 py-1 px-2 xl:table-cell">
						BY04 Mixed Color Children's Book
					</td>
					<td className="hidden border border-slate-700 py-1 px-2 xl:table-cell">$12,384.40</td>
					<td className="border border-slate-700 py-1 px-2">
						<select name="" id="">
							<option value="">Print</option>
							<option value="">Cancel</option>
							<option value="">Edit</option>
							<option value="">Convert</option>
						</select>
					</td>
				</tr>
				<tr>
					<td className="border border-slate-700 py-1 px-2">138493</td>
					<td className="border border-slate-700 py-1 px-2">Pioneer Valley Books</td>
					<td className="hidden border border-slate-700 py-1 px-2 xl:table-cell">Reza</td>
					<td className="hidden border border-slate-700 py-1 px-2 xl:table-cell">Celeste</td>
					<td className="hidden border border-slate-700 py-1 px-2 xl:table-cell">
						BY04 Mixed Color Children's Book
					</td>
					<td className="hidden border border-slate-700 py-1 px-2 xl:table-cell">$12,384.40</td>
					<td className="border border-slate-700 py-1 px-2">
						<select name="" id="">
							<option value="">Print</option>
							<option value="">Cancel</option>
							<option value="">Edit</option>
							<option value="">Convert</option>
						</select>
					</td>
				</tr>
			</tbody>
			<tfoot></tfoot>
		</table>
	);
};

export default Table;
