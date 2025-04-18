<?php

namespace App\Http\Controllers;


use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\Project;
use App\Models\Habilidad;
use Illuminate\Support\Facades\Storage;

class ProjectController extends Controller
{    
    public function index()
    {
        $project = Project::all();
        return Inertia::render('Panel', [
            'project' => $project,
            'habilidades' => Habilidad::all()
        ]);
    }

    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required',
            'description' => 'required',
             'image' => 'nullable|image|mimes:jpeg,png,jpg,gif|max:2048'
            
        ]);
        
        $project = new Project();
        $project->name = $request->name;
        $project->description = $request->description;
        
        // Procesar la imagen si se ha subido
        if ($request->hasFile('image')) {
            $imagePath = $request->file('image')->store('projects', 'public');
            $project->image = Storage::url($imagePath);
        } else {
            $project->image = null;
        }
        
        $project->user_id = auth()->id(); // Asignar el ID del usuario autenticado
        $project->save();
        
        return redirect()->route('panel.index');
    }

    public function show(Project $project)
    {
        return Inertia::render('Panel', ['project' => $project]);
    }

    public function edit(Project $project)
    {
        return Inertia::render('Panel', ['project' => $project]);
    }

    public function update(Request $request, Project $project)
    {
        $request->validate([
            'name' => 'required',
            'description' => 'required',
            'image' => 'nullable|image|mimes:jpeg,png,jpg,gif|max:2048'
        ]);
        
        $project->name = $request->name;
        $project->description = $request->description;
        
        // Procesar la imagen si se ha subido
        if ($request->hasFile('image')) {
            // Eliminar la imagen anterior si existe
            if ($project->image) {
                $oldPath = str_replace('/storage/', '', $project->image);
                if (Storage::disk('public')->exists($oldPath)) {
                    Storage::disk('public')->delete($oldPath);
                }
            }
            
            $imagePath = $request->file('image')->store('projects', 'public');
            $project->image = Storage::url($imagePath);
        }
        
        $project->save();
        
        return redirect()->route('panel.index');
    }
    
    public function destroy($id)
    {
        // Eliminar la imagen si existe
        $project = Project::find($id);
        Storage::disk('public')->delete($project->image);

        
        $project->delete();
        return redirect()->route('panel.index');
    }
}
