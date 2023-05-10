<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Ramsey\Collection\Collection;
use Carbon\Carbon;

/**
 *
 * Class Section
 *
 * @property int $id
 * @property string $name
 * @property Carbon $updated_at
 *
 * @property Section|null $section
 * @property Collection|Section[] $sections
 *
 * @package App\Models
 */

class Section extends Model
{

    protected $table = 'sections';
    public $timestamps = false;

    protected $casts = [

    ];

    protected $dates = [
        'updated_at'
    ];

    protected $fillable = [
        'name',
        'updated_at'
    ];

    public function counts()
    {
        return $this->hasMany(counts::class, 'section_id');
    }
}
