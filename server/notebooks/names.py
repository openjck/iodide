import random

IODINE_COMPOUNDS = [
    "2-amino-5-iodopyridine",
    "4-iodoaniline",
    "aluminium iodide",
    "aluminium monoiodide",
    "aluminium triiodide",
    "antimony(III) iodide",
    "arsenic diiodide",
    "arsenic triiodide",
    "barium hypoiodite",
    "barium iodate",
    "barium iodide",
    "barium iodite",
    "barium periodate",
    "barium tetraiodomercurate(II)",
    "beryllium iodide",
    "bismuth(III) iodide",
    "bismuth(III) oxyiodide",
    "boron iodide",
    "cadmium iodate",
    "cadmium iodide",
    "caesium hypoiodite",
    "caesium iodate",
    "caesium iodide",
    "caesium iodite",
    "caesium periodate",
    "caesium triiodide",
    "calcium hypoiodite",
    "calcium iodate",
    "calcium iodide",
    "calcium iodite",
    "calcium periodate",
    "cerium(II) iodide",
    "cerium(III) iodide",
    "chromium(II) iodide",
    "chromium(III) iodide",
    "cobalt(II) iodate",
    "cobalt(II) iodide",
    "copper(I) iodate",
    "copper(I) iodide",
    "copper(II) iodate",
    "deuterium iodide",
    "difluoroiodophosphine",
    "diiodobutadiyne",
    "diiron diiodide",
    "diiron tetraiodide",
    "diphosphorus tetraiodide",
    "erbium sodium tetraiodide",
    "erbium triiodide",
    "europium diiodide",
    "gallium(II) iodide",
    "gallium(III) iodide",
    "germanium(II) iodide",
    "germanium(IV) iodide",
    "gold iodide",
    "gold(III) iodide",
    "hydroiodic acid",
    "hypoiodous acid",
    "indium(I) iodide",
    "indium(II) iodide",
    "indium(III) bromodiiodide",
    "indium(III) dibromoiodide",
    "indium(III) iodate",
    "indium(III) iodide",
    "iodate ion",
    "iodic acid",
    "iodine fluoride",
    "iodine heptafluoride",
    "iodine monofluoride",
    "iodine pentafluoride",
    "iodine pentoxide",
    "iodine(I) bromide",
    "iodine(III) bromide",
    "iodine(III) chloride",
    "iodobenzene",
    "iodomethane",
    "iodous acid",
    "iron diiodide",
    "iron monoiodide",
    "iron(II) iodide tetrahydrate",
    "iron(III) iodide",
    "lanthanum(III) iodide",
    "lead(II) iodate",
    "lead(II) iodide",
    "lithium hypoiodite",
    "lithium iodate",
    "lithium iodide",
    "lithium iodite",
    "lithium periodate",
    "magnesium hypoiodite",
    "magnesium iodate",
    "magnesium iodide",
    "magnesium iodite",
    "magnesium periodate",
    "manganese(II) iodide",
    "mercury(I) iodide",
    "mercury(II) iodate",
    "mercury(II) iodide",
    "monofluorodiiodine",
    "neodymium(III) iodide",
    "nickel(II) iodide",
    "niobium(V) iodide",
    "nitrogen triiodide",
    "nitrosyl iodide",
    "periodic acid",
    "potassium hypoiodite",
    "potassium iodate",
    "potassium iodide",
    "potassium iodite",
    "potassium periodate",
    "rubidium hypoiodite",
    "rubidium iodate",
    "rubidium iodide",
    "rubidium iodite",
    "rubidium periodate",
    "silicon(IV) iodide",
    "silver hypoiodite",
    "silver iodate",
    "silver iodide",
    "silver iodite",
    "silver periodate",
    "silver(III) triiodide",
    "sodium hypoiodite",
    "sodium iodate",
    "sodium iodide",
    "sodium iodite",
    "sodium periodate",
    "strontium hypoiodite",
    "strontium iodate",
    "strontium iodide hexahydrate",
    "strontium iodide",
    "strontium iodite",
    "strontium periodate",
    "tantalum(V) iodide",
    "tellurium(II) iodide",
    "tellurium(IV) iodide",
    "thallium(I) iodate",
    "thallium(I) iodide",
    "thallium(III) iodide",
    "tin(IV) dichlorodiiodide",
    "tin(IV) iodide",
    "titanium(IV) dichlorodiiodide",
    "titanium(IV) iodide",
    "titanium(IV) trichloroiodide",
    "triiodide ion",
    "tungsten(II) iodide",
    "tungsten(IV) iodide",
    "tungsten(VI) dioxydiiodide",
    "uranium(III) iodide",
    "vanadium(III) iodide",
    "ytterbium(II) iodide",
    "ytterbium(III) iodide",
    "zinc iodate",
    "zinc iodide",
    "zirconium iodide",
]


def get_random_compound():
    return random.choice(IODINE_COMPOUNDS)
