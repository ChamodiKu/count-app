<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Ramsey\Collection\Collection;
use Carbon\Carbon;

/**
 *
 * Class Count
 *
 * @property int $id
 * @property int $product_id
 * @property int $count_id
 * @property float $tcount
 * @property Carbon $updated_at
 *
 * @property Count|null $count
 * @property Collection|Count[] $counts
 *
 * @package App\Models
 */

class Count extends Model
{

    protected $table = 'counts';
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
        return $this->hasMany(counts::class, 'count_id');
    }
}
