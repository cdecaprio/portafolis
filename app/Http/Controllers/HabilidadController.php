<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Habilidad;
use Inertia\Inertia;

class HabilidadController extends Controller
{
    public function index()
    {
        $habilidades = Habilidad::all();
        return Inertia::render('Panel', [
            'habilidades' => $habilidades
        ]);
    }

    public function store(Request $request)
    {
        $request->validate([
            'nombre' => 'required',
            'descripcion' => 'required',
        ]);
        $habilidad = new Habilidad();
        $habilidad->nombre = $request->nombre;
        $habilidad->descripcion = $request->descripcion;
        $habilidad->user_id = auth()->id();
        
        $habilidad->save();
        
        return redirect()->route('panel.index');
    }

    public function destroy($id)
    {
        $habilidad = Habilidad::find($id);
        $habilidad->delete();
        return redirect()->route('panel.index');
    }
}
