from sklearn.feature_extraction.text import CountVectorizer
from sklearn.metrics.pairwise import cosine_similarity
import nltk
from django.views.decorators.csrf import csrf_protect
from django.views.decorators.http import require_POST, require_GET
import json
from django.http import JsonResponse

@csrf_protect
@require_POST
def get_inference(request):
    data = json.loads(request.body)
    job = data.get('job')
    resume = data.get('resume')

    # Matching test
    Match_Test = [job, resume]

    # Vectorization
    cv = CountVectorizer()
    count_matrix = cv.fit_transform(Match_Test)

    # Cosine similarity
    similarity = cosine_similarity(count_matrix)
    print('Similarity is :', similarity)

    # Match percentage
    MatchPercentage = similarity[0][1] * 100
    MatchPercentage = round(MatchPercentage, 2)
    print('Match Percentage is :' + str(MatchPercentage) + '% to Requirement')

    # Get matching words
    cv_features = cv.get_feature_names_out()
    cv_vector = count_matrix.toarray()

    # Find common words
    matching_words = []
    for i, word in enumerate(cv_features):
        if cv_vector[0][i] > 0 and cv_vector[1][i] > 0:
            matching_words.append(word)

    # print('Matching words:', matching_words)

    # Filter matching words to only include nouns
    nouns = set()
    words_pos = nltk.pos_tag(matching_words)
    for word, pos in words_pos:
        if pos.startswith('NN'):  # Nouns are tagged with 'NN'
            nouns.add(word)

    # print('Matching nouns:', list(nouns))

    return JsonResponse({
        'Matching Nouns': list(nouns),
        'Match Percentage':  str(MatchPercentage),
    })
