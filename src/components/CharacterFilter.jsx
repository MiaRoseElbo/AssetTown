import React from 'react'


export default function CharacterFilter({ assets, selected, onChange }){
const chars = Array.from(new Set(assets.map(a=>a.character))).sort()
return (
<select value={selected||''} onChange={e=>onChange(e.target.value||null)} className="border rounded px-3 py-2">
<option value="">All characters</option>
{chars.map(c=> <option key={c} value={c}>{c}</option>)}
</select>
)
}